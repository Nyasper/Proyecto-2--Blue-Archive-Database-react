import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/services/useFetch.js';
import { CharaList } from '@/components/charaList.jsx';

export default function Allcharacters({ imageProfileSrc }) {
	const { categoryName, categoryValue } = useParams();

	const searchRef = useRef();
	const charaListRef = useRef();

	const fetchUrl =
		categoryName && categoryValue
			? `category/${categoryName}?value=${categoryValue}`
			: 'all';

	const { data, error } = useFetch(fetchUrl);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<CharaList
			title={'All Characters'}
			data={data}
			charaListRef={charaListRef}
			imageProfileSrc={imageProfileSrc}
		/>
	);
}

{
	/* <Header
	title="All Characters"
	searchBar={true}
	inputRef={searchRef}
	inputEvent={() => searching(charaListRef, searchRef)}
/>; */
}
