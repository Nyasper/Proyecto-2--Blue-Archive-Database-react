import { useState } from 'react';
import styles from '../styles/header.module.css';

export function Header({
	title,
	searchBar,
	handleSearch,
	inputRef,
	inputEvent,
}) {
	return searchBar ? (
		<header id={styles.headerContainer}>
			<h1 className={styles.title}>{title}</h1>
			<br />
			<input
				type="text"
				className={styles.searchBar}
				placeholder="Search..."
				onChange={(e) => handleSearch(e)}
				ref={inputRef}
			/>
		</header>
	) : (
		<header id={styles.titleContainer}>
			<h1 className={styles.title}>{title}</h1>
		</header>
	);
}
