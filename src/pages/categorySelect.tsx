import styles from '@/styles/categoryView.module.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { categoriesNoUrl, handleCategoryName } from '../services/studentUtils';
import { StoreContext } from '../stores/storeContext';
import { getPropertyDataDistinct } from '../services/studentUtils';
import type { ExcludedCategoriesUrl } from '../services/studentUtils';

export default function CategoryView() {
	const navigate = useNavigate();
	const { categoryName } = useParams<{ categoryName: string }>();

	// const category = categoryName ? `category/${categoryName}` : 'category/all';
	const { students } = useContext(StoreContext)!;
	const allCategoriesKeys = Object.keys(students[0]);
	const allCategories = useMemo(() => {
		return getPropertyDataDistinct(
			students,
			categoryName as ExcludedCategoriesUrl
		);
	}, [students, categoryName]);

	// route param validation
	const isSpecificCategory = allCategoriesKeys.includes(categoryName!);
	const isInvalidParam =
		!categoryName ||
		allCategories.length === 0 ||
		!allCategoriesKeys.includes(categoryName) ||
		categoriesNoUrl.includes(categoryName as any);

	useEffect(() => {
		if (isInvalidParam) {
			navigate('/characters/category/all');
		}
		if (isSpecificCategory) {
			console.log('Aca estamos en una valida');
		}
	}, [categoryName, allCategories, navigate]);

	function renderlinkList() {
		return (
			<ul id={styles.categoryUlList}>
				{allCategories.map((category, index) => (
					<li key={index}>
						{isSpecificCategory ? (
							<Link to={`/characters/category/${categoryName}/${category}`}>
								{handleCategoryName(category)}
							</Link>
						) : (
							<Link to={`/characters/category/${category}`}>
								{handleCategoryName(category)}
							</Link>
						)}
					</li>
				))}
			</ul>
		);
	}

	return (
		<div id={styles.categoryDivContainer}>
			<h2>Select a Category</h2>
			{renderlinkList()}
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
