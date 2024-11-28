import styles from '@/styles/categoryView.module.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { StoreContext } from '../stores/storeContext';
import {
	getPropertyDataDistinct,
	handleCategoryValue,
} from '../services/studentUtils';
import {
	type ExcludedCategoriesUrl,
	categoriesNoUrl,
	handleCategoryName,
} from '../services/studentUtils';
import type { Student } from '../models/student.model';

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
	const isSpecificCategory: boolean = allCategoriesKeys.includes(categoryName!);
	const isInvalidParam =
		!categoryName ||
		allCategories.length === 0 ||
		!allCategoriesKeys.includes(categoryName) ||
		categoriesNoUrl.includes(categoryName as any);

	useEffect(() => {
		if (isInvalidParam) {
			navigate('/characters/category/all');
		}
	}, [categoryName, allCategories, navigate]);

	function renderlinkList() {
		return (
			<ul id={styles.categoryUlList}>
				{allCategories.map((category, index) => (
					<li key={index}>
						{isSpecificCategory ? (
							<Link to={`/characters/category/${categoryName}/${category}`}>
								{handleCategoryName(
									handleCategoryValue(
										categoryName as keyof Student,
										String(category)
									) as keyof Student
								)}
							</Link>
						) : (
							<Link to={`/characters/category/${category}`}>
								{handleCategoryName(category as keyof Student)}
							</Link>
						)}
					</li>
				))}
			</ul>
		);
	}

	return (
		<div id={styles.categoryDivContainer}>
			{isSpecificCategory ? (
				<h2>Select a value for: {categoryName}</h2>
			) : (
				<h2>View characters by:</h2>
			)}
			{renderlinkList()}
		</div>
	);
}
