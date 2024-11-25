import { useParams } from 'react-router-dom';
import styles from '@/styles/charaDetails.module.css';
import { CharaInfoTable } from '../components/charaInfoTable';
import { getStudentMedia } from '../services/studentUtils';
import { useContext } from 'react';
import { StoreContext } from '../stores/storeContext';
import { getKeysWithoutNull } from '../services/studentUtils';

export default function CharaView() {
	const { charaName } = useParams();

	//get data
	const { students } = useContext(StoreContext)!;
	const student = students.find((s) => s.charaName === charaName);
	if (!student) return <h2>Student doesn't found</h2>;
	const categories = getKeysWithoutNull(student);

	return (
		<article id={styles.charaViewContainer}>
			<div className={styles.imgContainer}>
				<img
					src={getStudentMedia(student, 'imgFull')}
					alt={`${student.charaName} full image`}
					className={styles.charaFullImage}
				/>
			</div>
			<CharaInfoTable categories={categories} chara={student} />
		</article>
	);
}
