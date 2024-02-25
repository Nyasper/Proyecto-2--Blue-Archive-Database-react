export default function Header(props) {
	return props.search ? (
		<header id={styles.headerContainer}>
			<h1 className={`${styles.title} ${props.theme}`}>{props.title}</h1>
			<input
				type="text"
				className={styles.searchBar}
				placeholder="Search..."
				onInput={props.inputEvent}
				ref={props.inputRef}
			/>
		</header>
	) : (
		<header id={styles.titleContainer}>
			<h1 className={`${styles.title} ${props.theme}`}>{props.title}</h1>
		</header>
	);
}
import styles from '../styles/header.module.css';
