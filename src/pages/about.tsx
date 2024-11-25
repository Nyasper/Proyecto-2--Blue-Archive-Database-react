import styles from '../styles/about.module.css';

export default function About() {
	return (
		<div id={`${styles.aboutContainer}`}>
			<h2 className="subtitle">About this Project</h2>
			<p>
				<span>Blue Archive Database</span> is an app where users can access a
				variety of data related to the popular mobile game{' '}
				<a
					href="https://bluearchive.nexon.com/home"
					className={styles.anchor}
					target="_blank"
					rel="noopener noreferrer"
				>
					Blue Archive
				</a>
				.
			</p>

			<p>
				This project was built with React. The main functionality of the
				application is to search data of different characters.
			</p>

			<p>
				All characters and illustrations shown in this application aren't mine.
				The information used was extracted from the game's{' '}
				<a
					href="https://bluearchive.wiki/wiki/Characters"
					target="_blank"
					className={styles.anchor}
				>
					wiki
				</a>{' '}
				for educational and learning purposes.
			</p>
		</div>
	);
}
