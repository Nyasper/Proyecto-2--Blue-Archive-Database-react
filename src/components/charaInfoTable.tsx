import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
	categoriesNoUrl,
	getStudentMedia,
	handleCategoryName,
	handleCategoryValue,
} from '../services/studentUtils';
import type { Student } from '../models/student.model';
import styles from '../styles/charaDetails.module.css';
import { Button } from '@mui/material';

export function CharaInfoTable({ categories, chara }: Props) {
	function renderCategories() {
		return categories.map((categoryName) => (
			<tr key={categoryName}>
				<th>{handleCategoryName(categoryName)}</th>

				{categoryName !== 'voice' ? (
					<td>
						{categoriesNoUrl.includes(categoryName) ? (
							handleCategoryValue(categoryName, String(chara[categoryName]))
						) : (
							<Link
								to={`/characters/category/${categoryName}/${chara[categoryName]}`}
							>
								{handleCategoryValue(categoryName, String(chara[categoryName]))}
							</Link>
						)}
					</td>
				) : (
					<td>
						{handleCategoryName(chara[categoryName] as 'voice')}
						<audio src={getStudentMedia(chara, 'audio')} ref={audioRef}></audio>
						<Button type="button" onClick={playAudio} variant="contained">
							Play
						</Button>
					</td>
				)}
			</tr>
		));
	}

	//Audio Play
	//refs
	const audioRef = useRef<HTMLAudioElement>(null);

	const playAudio = () => {
		if (!audioRef.current) return;
		audioRef.current.volume = 0.2;
		audioRef.current.play();
	};

	return (
		<div className={styles.tableContainer}>
			<table>
				<tbody>
					<tr>
						<th>Character</th>
						<td>{chara.charaName?.replaceAll('_', ' ')}</td>
					</tr>
					{renderCategories()}
					<tr>
						<th>Wiki URL</th>
						<td>
							<a href={chara.pageUrl} target="_blank">
								{chara.pageUrl}
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

interface Props {
	categories: (keyof Student)[];
	chara: Student;
}
