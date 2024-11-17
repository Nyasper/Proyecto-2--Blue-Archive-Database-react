import styles from '@/styles/charaItem.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function CharaItem({ charaName, school, clickEvent }: Props) {
	return (
		<li className={styles.charaItemContainer}>
			<div className={styles.imgContainer}>
				<LazyLoadImage
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

interface Props {
	charaName: string;
	school: string;
	clickEvent: () => void;
}
