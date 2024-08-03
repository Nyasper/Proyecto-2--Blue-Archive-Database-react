import { Link } from 'react-router-dom';
import styles from '@/styles/charaList.module.css';

export function CharaListSideComponent({ currentChara, selectedImageRef }) {
	return currentChara && currentChara.name && currentChara.url ? (
		<div id={styles.selectedImageContainer}>
			<h2 className="centerText">
				<b className="bold">{currentChara.name}</b>
			</h2>
			<Link
				to={currentChara.name}
				id={styles.imageAContainer}
				className={styles.animationSlide}
			>
				<img
					id={styles.selectedImage}
					ref={selectedImageRef}
					src={currentChara.url}
				/>
			</Link>
		</div>
	) : (
		<div id={styles.selectedImageContainer}>
			<h2
				className="centerText"
				style={{
					height: '100%',
					display: 'grid',
					alignContent: 'center',
				}}
			>
				<b className="bold">Select an Image</b>
			</h2>
		</div>
	);
}
