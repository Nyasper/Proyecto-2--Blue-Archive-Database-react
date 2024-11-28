import styles from '@/styles/charaItem.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getStudentMedia } from '../services/studentUtils';
import { Link } from 'react-router-dom';

export default function CharaItem({
	charaName,
	school,
	clickEvent,
	withUrl = false,
}: Props) {
	const renderImage = () => (
		<LazyLoadImage
			className={styles.charaImage}
			onClick={clickEvent}
			src={getStudentMedia({ charaName, school }, 'imgProfile')}
			loading="lazy"
		/>
	);

	return (
		<li className={styles.charaItemContainer}>
			<div className={styles.imgContainer}>
				{withUrl ? (
					<Link to={`/characters/${charaName}`}>{renderImage()}</Link>
				) : (
					renderImage()
				)}
			</div>
			<p className={styles.charaItemText}>{charaName.replaceAll('_', ' ')}</p>
		</li>
	);
}

interface Props {
	charaName: string;
	school: string;
	withUrl: boolean;
	clickEvent: () => void;
}
