export default function Home(props) {
	return (
		<div id={`${styles.homeContainer}`} className={`${props.theme}`}>
			<h1>Blue Archive Data Base</h1>
			<img
				src="/extras/Shiroko_Swimsuit_Icon.png"
				alt="shiroko_picture"
				className={styles.homeImg}
			/>
		</div>
	);
}
import styles from '../styles/homePage.module.css';
