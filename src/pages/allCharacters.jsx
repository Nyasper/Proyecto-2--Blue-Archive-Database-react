export default function Allcharacters(props) {
	const { categoryName, categoryValue } = useParams();

	const fetchUrl =
		categoryName && categoryValue
			? `category/${categoryName}?value=${categoryValue}`
			: 'all';

	const { data } = useFetch(fetchUrl);
	/*
	useFetch(() => {
		localStorage.setItem('charaData', JSON.stringify(data));
	}, []);
	*/
	const searchRef = useRef();
	const charaListRef = useRef();

	return data ? (
		<div className={`${props.theme} gridRow2`}>
			<Header
				title="All Characters"
				search={true}
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
	) : (
		<LoadingScreen />
	);
}

import searching from '../utils/searchUtils';
import { useRef } from 'react';
import { useFetch } from '../utils/useFetch.js';
import { useParams } from 'react-router-dom';
import CharaList from '../components/charaList.jsx';
import Header from '../components/header.jsx';
import LoadingScreen from '../components/loadingScreen.jsx';
