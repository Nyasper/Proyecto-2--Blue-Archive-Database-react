import searching from '../services/searchUtils';
import { useParams } from 'react-router-dom';
import { CharaList } from './charaList';
import { Header } from './header';
import { useContext, useRef } from 'react';
import { StoreContext } from '../stores/storeContext';

export default function SchoolView(props) {
	const { schoolName } = useParams();
	const { students } = useContext(StoreContext)!;
	const schools = new Set(students.map((s) => s.school));
	const searchRef = useRef<HTMLInputElement>();
	const charaListRef = useRef<HTMLUListElement>();

	return (
		<section id="schoolViewContainer">
			<Header
				title={`School: ${schoolName}`}
				inputRef={searchRef}
				inputEvent={() => searching(charaListRef, searchRef)}
			/>
			<h2>Las escuelas: {JSON.stringify(schools)}</h2>
			<CharaList
				students={data}
				charaListRef={charaListRef}
				theme={props.theme}
			/>
		</section>
	);
}
