import { type ChangeEvent, type RefObject } from 'react';
import styles from '../styles/header.module.css';

export function Header({
	title,
	withSearchBar = false,
	handleSearch,
}: // inputRef,
// inputEvent,
// TODO: ver para que sirve inputEvent
Props) {
	return withSearchBar ? (
		<header id={styles.headerContainer}>
			<h1 className={styles.title}>{title}</h1>
			<br />
			<input
				type="text"
				className={styles.searchBar}
				placeholder="Search..."
				onChange={handleSearch}
				// ref={inputRef}
			/>
		</header>
	) : (
		<header id={styles.titleContainer}>
			<h1 className={styles.title}>{title}</h1>
		</header>
	);
}

interface Props {
	title: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	withSearchBar: boolean;
	// inputRef: RefObject<HTMLInputElement>;
	// inputEvent: () => void;
}
