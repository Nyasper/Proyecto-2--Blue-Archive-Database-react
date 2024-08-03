import styles from '@/styles/charaItem.module.css';

export default function CharaItem({ charaName, school, clickEvent }) {
	return (
		<li className={styles.charaItemContainer}>
			<div className={styles.imgContainer}>
				<img
					className={styles.charaImage}
					onClick={clickEvent}
					src={`/media/${school}/${charaName}.png`}
					loading="lazy"
				/>
			</div>
			<p className={styles.charaItemText}>{charaName.replaceAll('_', ' ')}</p>
		</li>
	);
}
