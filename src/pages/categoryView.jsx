import styles from '@/styles/categoryView.module.css';
import { useFetch } from '@/services/useFetch';
import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { getImgSrc, manageCategoryName } from '@/services/mangeCategories';

export default function CategoryView() {
	const { categoryName } = useParams();
	const fetchUrl = categoryName ? `category/${categoryName}` : 'category/all';

	const { data: categoryData } = useFetch(fetchUrl);
	const imgSrc = getImgSrc(categoryName);

	const charaListRef = useRef();

	return (
		<div id={styles.categoryDivContainer}>
			<ul id={styles.categoryUlList} ref={charaListRef}>
				{categoryData.map((result, index) => (
					<li key={index}>
						<Link to={'./' + result}>
							<p>{manageCategoryName(result)}</p>
							{imgSrc ? (
								<img src={`${imgSrc}/${result}.png`} alt={`${result} image`} />
							) : null}
						</Link>
					</li>
				))}
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
