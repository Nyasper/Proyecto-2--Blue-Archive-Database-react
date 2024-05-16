export default function CharaView(props) {
	const { charaName } = useParams();

	//Fetch
	const { data, categories } = useFetchWithCategories(charaName);

	//Audio Play

	//refs
	const audioRef = useRef(null);
	const playButtonRef = useRef(null);
	const stopButtonRef = useRef(null);

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

	const stopPlay = () => {
		audioRef.current.load();
		stopButtonRef.current.hidden = true;
		playButtonRef.current.hidden = false;
	};

	return data ? (
		<div id={styles.charaViewContainer} className={props.theme}>
			<img
				src={`/media/${data.school}/${data.charaName}_full.png`}
				alt={`${data.charaName} full image`}
				id={styles.fullImage}
			/>
			<div id={styles.infoTable}>
				<h2>{data.charaName.replaceAll('_', ' ')}</h2>
				{categories.map((c, i) => (
					<p key={i}>
						<b>{c}: </b>
						<Link to={`/characters/category/${c}/${data[c]}`}>{data[c]}</Link>
					</p>
				))}
				<p>
					<b>pageUrl: </b>
					<a id={styles.charaUrl} href={data.pageUrl} target="_blank">
						{data.pageUrl}
					</a>
				</p>
			</div>
		</div>
	) : (
		<LoadingScreen />
	);
}
import { useParams } from 'react-router-dom';
import { useFetch, useFetchWithCategories } from '../utils/useFetch';
import { useRef } from 'react';
import LoadingScreen from '../components/loadingScreen';
import { Link } from 'react-router-dom';
import styles from '../styles/charaView.module.css';
