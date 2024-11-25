import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { categoriesNoUrl, getStudentMedia } from '../services/studentUtils';
import type { Student } from '../models/student.model';
import styles from '../styles/charaDetails.module.css';
import { Button } from '@mui/material';

export function CharaInfoTable({ categories, chara }: Props) {
	function renderCategories() {
		return categories.map((categoryName) => (
			<tr key={categoryName}>
				<th>{categoryName}</th>

				{categoryName !== 'voice' ? (
					<td>
						{categoriesNoUrl.includes(categoryName) ? (
							String(chara[categoryName])
						) : (
							<Link
								to={`/characters/category/${categoryName}/${chara[categoryName]}`}
							>
								{String(chara[categoryName])}
							</Link>
						)}
					</td>
				) : (
					<td>
						{chara[categoryName]}
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
	const playButtonRef = useRef<HTMLButtonElement>(null);

	const playAudio = () => {
		if (!audioRef.current) return;
		audioRef.current.volume = 0.1;
		audioRef.current.play();
		playButtonRef.current!.hidden = true;
	};

	// const playingAudio = () => {
	// 	stopButtonRef.current.hidden = false;
	// };

	// const playStopped = () => {
	// 	stopButtonRef.current.hidden = true;
	// 	playButtonRef.current.hidden = false;
	// };

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
