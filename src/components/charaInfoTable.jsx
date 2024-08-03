import { useRef } from 'react';
import styles from '@/styles/charaInfoTable.module.css';
import { categoriesNoUrl } from '@/services/categoryHandler';
import { Link } from 'react-router-dom';

export function CharaInfoTable({ categories, data }) {
	//Audio Play

	//refs
	const audioRef = useRef(null);
	const playButtonRef = useRef(null);

	const playAudio = () => {
		audioRef.current.volume = 0.1;
		audioRef.current.play();
		playButtonRef.current.hidden = true;
	};

	const playingAudio = () => {
		stopButtonRef.current.hidden = false;
	};

	const playStopped = () => {
		stopButtonRef.current.hidden = true;
		playButtonRef.current.hidden = false;
	};

	return (
		<table id={styles.charaDetailTable}>
			<tbody>
				<tr>
					<th>Character</th>
					<td>{data.charaName?.replaceAll('_', ' ')}</td>
				</tr>

				{categories?.map((category) => (
					<tr key={category}>
						<th>{category}</th>

						{category !== 'voice' ? (
							<td>
								{categoriesNoUrl.includes(category) ? (
									data[category]
								) : (
									<Link
										to={`/characters/category/${category}/${data[category]}`}
									>
										{data[category]}
									</Link>
								)}
							</td>
						) : (
							<td>
								{data[category]}
								<audio src={data?.audioSrc} ref={audioRef}></audio>
								<button type="button" onClick={playAudio}>
									Play
								</button>
							</td>
						)}
					</tr>
				))}

				<tr>
					<th>Wiki URL</th>
					<td>
						<a href={data.pageUrl} target="_blank">
							{data.pageUrl}
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
