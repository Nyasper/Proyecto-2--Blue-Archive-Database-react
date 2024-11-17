import searching from '@/services/searchUtils.js';
import { useFetch } from '@/services/useFetch';
import { useParams } from 'react-router-dom';
import CharaList from './charaList';
import Header from './header';
import { useRef } from 'react';

export default function SchoolView(props) {
	const { schoolName } = useParams();
	const { data } = useFetch(`schools/${schoolName}`);
	const searchRef = useRef();
	const charaListRef = useRef();

	return (
		<section id="schoolViewContainer">
			<Header
				title={`School: ${schoolName}`}
				inputRef={searchRef}
				inputEvent={() => searching(charaListRef, searchRef)}
			/>
			<CharaList data={data} charaListRef={charaListRef} theme={props.theme} />
		</section>
	);
}
