import styles from '../styles/categoryView.module.css';
import Header from '../components/header';
import { useFetch } from '../utils/useFetch';
import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { getImgSrc, manageCategoryName } from '../utils/mangeCategories';
import searching from '../utils/searchUtils';
import LoadingScreen from '../components/loadingScreen';

export default function CategoryView(props) {
	const { categoryName } = useParams();
	const fetchUrl = categoryName ? `category/${categoryName}` : 'category/all';

	const { data: categoryData } = useFetch(fetchUrl);
	const imgSrc = getImgSrc(categoryName);

	const searchRef = useRef();
	const charaListRef = useRef();

	return categoryData ? (
		<div id={styles.categoryDivContainer}>
			<Header
				title={
					categoryName
						? `Category: ${manageCategoryName(categoryName)}`
						: 'Select a Category'
				}
				search={true}
				inputRef={searchRef}
				inputEvent={() => searching(charaListRef, searchRef)}
				theme={props.theme}
			/>
			<ul id={styles.categoryUlList} ref={charaListRef}>
				{categoryData.map((result, index) => (
					<li key={index}>
						<Link to={'./' + result} className={props.theme}>
							<p>{manageCategoryName(result)}</p>
							{imgSrc ? (
								<img src={`${imgSrc}/${result}.png`} alt={`${result} image`} />
							) : null}
						</Link>
					</li>
				))}
			</ul>
		</div>
	) : (
		<LoadingScreen />
	);
}
