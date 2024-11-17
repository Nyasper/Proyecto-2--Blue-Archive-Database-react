import { useParams } from 'react-router-dom';
import { useFetch } from '../services/useFetch';
import styles from '@/styles/charaView.module.css';
import { CharaInfoTable } from '../components/charaInfoTable';

export default function CharaView() {
	const { charaName } = useParams();
	//Fetch
	const { data, categories } = useFetch(charaName);

	return (
		<div id={styles.charaViewContainer}>
			<img
				src={`/media/${data.school}/${data.charaName}_full.png`}
				alt={`${data.charaName} full image`}
				id={styles.fullImage}
			/>
			<CharaInfoTable categories={categories} data={data} />
		</div>
	);
}
