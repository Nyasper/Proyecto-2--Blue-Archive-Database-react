export default function Allcharacters(props) {
	const param = useParams();
	const location = useLocation();

	const [data, setData] = useState(null);

	useEffect(() => {
		const searchQuery = {
			category: '',
			value: '',
		};
		let fetchUrl;

		if (param.schoolName) {
			fetchUrl = `schools/${param.schoolName}`;
		} else if (location.search) {
			const searchParams = new URLSearchParams(location.search);
			searchQuery.category = searchParams.get('category');
			searchQuery.value = searchParams.get('value');
			fetchUrl = `category?category=${searchQuery.category}&value=${searchQuery.value}`;
		} else {
			fetchUrl = 'all';
		}

		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/api/chara/${fetchUrl}`
				);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [param.schoolName, location.search]); // Dependencias del efecto

	// if (data) data = data.data;

	const searchRef = useRef();
	const charaListRef = useRef();

	return (
		<div className={`${props.theme} gridRow2`}>
			<Header
				title="All Characters"
				theme={props.theme}
				inputRef={searchRef}
				inputEvent={() => searching(charaListRef, searchRef)}
			/>
			<CharaList
				data={data}
				theme={props.theme}
				charaListRef={charaListRef}
				imageProfileSrc={props.imageProfileSrc}
			/>
		</div>
	);
}

/*
ladeGPT
export default function Allcharacters(props) {
	const param = useParams();
	const location = useLocation();
	const [data, setData] = useState(null);

	// Lógica para realizar la petición fetch
	useEffect(() => {
		let fetchUrl;
		if (param.schoolName) {
			fetchUrl = `schools/${param.schoolName}`;
		} else if (location.search) {
			const searchParams = new URLSearchParams(location.search);
			const category = searchParams.get('category');
			const value = searchParams.get('value');
			fetchUrl = `category?category=${category}&value=${value}`;
		} else {
			fetchUrl = 'all';
		}

		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/chara/${fetchUrl}`);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [param.schoolName, location.search]); // Dependencias del efecto

	const searchRef = useRef();
	const charaListRef = useRef();

	return (
		<div className={`${props.theme} gridRow2`}>
			<Header
				title="All Characters"
				theme={props.theme}
				inputRef={searchRef}
				inputEvent={() => searching(charaListRef, searchRef)}
			/>
			{data && (
				<CharaList
					data={data}
					theme={props.theme}
					charaListRef={charaListRef}
					imageProfileSrc={props.imageProfileSrc}
				/>
			)}
		</div>
	);
}
*/
import searching from '../utils/searchUtils';
import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CharaList from '../components/charaList.jsx';
import Header from '../components/header.jsx';
