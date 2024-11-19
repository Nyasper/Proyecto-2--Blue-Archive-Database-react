import styles from '@/styles/categoryView.module.css';
import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { manageCategoryName } from '../services/studentUtils';
import { StoreContext } from '../stores/storeContext';

export default function CategoryView() {
	const { categoryName } = useParams<{ categoryName: string }>();
	useEffect(
		() => console.log('andamo en category view', categoryName),
		[categoryName]
	);
	// const category = categoryName ? `category/${categoryName}` : 'category/all';
	const store = useContext(StoreContext);

	const category = useMemo(() => {
		if (!store?.students) return;

		return store?.students;
	}, [store?.students]);

	const charaListRef = useRef();

	return (
		<div id={styles.categoryDivContainer}>
			<ul id={styles.categoryUlList} ref={charaListRef}>
				{/* {categoryData.map((result, index) => (
					<li key={index}>
						<Link to={'./' + result}>
							<p>{manageCategoryName(result)}</p>
							{imgSrc ? (
								<img src={`${imgSrc}/${result}.png`} alt={`${result} image`} />
							) : null}
						</Link>
					</li>
				))} */}
				<li>aca mostro hacer</li>
			</ul>
		</div>
	);
}

// <Header
// 	title={
// 		categoryName
// 			? `Category: ${manageCategoryName(categoryName)}`
// 			: 'Select a Category'
// 	}
// 	searchBar={true}
// 	inputRef={searchRef}
// 	inputEvent={() => searching(charaListRef, searchRef)}
// />;
