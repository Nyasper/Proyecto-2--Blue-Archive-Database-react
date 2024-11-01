import { Link } from 'react-router-dom';
import styles from '@/styles/gameInfoComponent.module.css';
// import aboutStyles from '../styles/about.module.css';

import { Button } from '@mui/material';

export function GameInfoComponent() {
	return (
		<div id={styles.gameInfoContainer}>
			<h1>Blue Archive</h1>
			<img
				src="/extras/Shiroko_Swimsuit_Icon.png"
				alt="shiroko_picture"
				className={styles.homeImg}
			/>
			<p>
				Blue Archive is a free-to-play mobile game developed by Nexon Games.
				Game uses gacha game mechanics for obtaining characters as the primary
				monetization method.
			</p>
			<Button variant="contained">
				<Link to={'/characters'}>Start searching Characters</Link>
			</Button>
			<a href={'#' + styles.arrowDown}>
				<img id={styles.arrowDown} src="/extras/arrowDown.svg" alt="" />
			</a>
		</div>
	);
}
