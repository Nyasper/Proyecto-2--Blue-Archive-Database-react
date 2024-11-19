import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CharaList } from '../components/charaList';
import { StoreContext } from '../stores/storeContext';

export default function Allcharacters() {
	const { categoryName, categoryValue } = useParams();

	const charaListRef = useRef<HTMLUListElement | null>(null);
	const store = useContext(StoreContext);

	const fetchUrl =
		categoryName && categoryValue
			? `category/${categoryName}?value=${categoryValue}`
			: 'all';

	return (
		<CharaList
			title={'All Characters'}
			students={store?.students ?? []}
			error={store!.studentsError}
			charaListRef={charaListRef}
		/>
	);
}
