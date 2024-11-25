import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from '../styles/gameIntro.module.css';

export function GameIntroComponent() {
	return (
		<div id={styles.gameInfoContainer}>
			<img
				src="/extras/Shiroko_Swimsuit_Icon.png"
				alt="shiroko_picture"
				className={styles.homeImg}
			/>
			<h1>Welcome to Blue Archive database</h1>
			<p>
				Blue Archive is a free-to-play gacha like mobile game developed by Nexon
				Games.
			</p>
			<Button variant="contained">
				<Link to={'/characters'}>Start discovering Characters</Link>
			</Button>

			<Link to={'/about'} className={styles.moreAbout}>
				Read more about this project
			</Link>
		</div>
	);
}
