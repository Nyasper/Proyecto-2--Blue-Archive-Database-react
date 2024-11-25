import { Link } from 'react-router-dom';
import styles from '@/styles/charaList.module.css';
import type { RefObject } from 'react';
import type { CharacterImageGlobalState } from '../stores/storeContext';
export function CharaListSideComponent({
	currentChara,
	selectedImageRef,
}: Props) {
	return currentChara && currentChara.name && currentChara.url ? (
		<div id={styles.selectedImageContainer}>
			<h2 className="centerText">
				<b className="bold">selected: {currentChara.name}</b>
			</h2>
			<Link to={currentChara.name} className={styles.animationSlide}>
				<img
					className={styles.selectedImage}
					ref={selectedImageRef}
					src={currentChara.url}
				/>
			</Link>
			<p>Click to view details</p>
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

interface Props {
	currentChara: CharacterImageGlobalState;
	selectedImageRef: RefObject<HTMLImageElement>;
}
