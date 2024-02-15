export default function CharaView(props) {
	const { charaName } = useParams();

	//Fetch
	const { data } = useFetch(charaName);

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

	return (
		<>
			{data ? (
				<div id={styles.charaViewContainer} className={props.theme}>
					<img
						src={`/media/${data.school}/${data.charaName}_full.png`}
						alt={`${data.charaName} full image`}
						id={styles.fullImage}
					/>
					<div id={styles.infoTable}>
						<h2>{data.charaName.replaceAll('_', ' ')} </h2>
						{data.name ? (
							<p>
								<b>Name: </b>
								<Link
									to={`/characters/category?category=name&value=${data.name}`}
								>
									{data.name}
								</Link>
							</p>
						) : null}
						{data.lastName ? (
							<p>
								<b>Last Name: </b> {data.lastName}
							</p>
						) : null}
						{data.age ? (
							<p>
								<b>Age: </b>{' '}
								<Link
									to={`/characters/category?category=age&value=${data.age}`}
								>
									{data.age}
								</Link>
							</p>
						) : null}
						{data.school ? (
							<p>
								<b>School: </b>{' '}
								<Link to={`../selectSchool/${data.school}`}>{data.school}</Link>
							</p>
						) : null}
						{data.birthday ? (
							<p>
								<b>Birthday: </b>
								{data.birthday}
							</p>
						) : null}
						{data.height ? (
							<p>
								<b>Height: </b>
								{data.height}
							</p>
						) : null}
						{data.hobbies ? (
							<p>
								<b>Hobbies: </b>
								{data.hobbies}
							</p>
						) : null}
						{data.designer ? (
							<p>
								<b>Designer: </b>{' '}
								<Link
									to={`/characters/category?category=designer&value=${data.designer}`}
								>
									{data.designer}
								</Link>
							</p>
						) : null}
						{data.illustrator ? (
							<p>
								<b>Illustrator: </b>
								<Link
									to={`/characters/category?category=illustrator&value=${data.illustrator}`}
								>
									{data.illustrator}
								</Link>
							</p>
						) : null}
						{data.voice ? (
							<p>
								<b>Voice: </b>
								<Link
									to={`/characters/category?category=voice&value=${data.voice}`}
								>
									{data.voice}
								</Link>
								<audio
									ref={audioRef}
									onPlay={playingAudio}
									onEnded={playStopped}
									src={`/media/${data.school}/${data.charaName}.ogg`}
								/>
								<i
									className={`uil uil-play ${styles.mediaIcon}`}
									ref={playButtonRef}
									onClick={playAudio}
								/>
								<i
									className={`uil uil-stop-circle ${styles.mediaIcon}`}
									ref={stopButtonRef}
									onClick={stopPlay}
									hidden
								/>
							</p>
						) : null}
						{data.role ? (
							<p>
								<b>Role: </b>
								<Link
									to={`/characters/category?category=role&value=${data.role}`}
								>
									{data.role.replace('_', '/')}
								</Link>
							</p>
						) : null}
						{data.combatClass ? (
							<p>
								<b>Combat Class: </b>
								<Link
									to={`/characters/category?category=combatClass&value=${data.combatClass}`}
								>
									{data.combatClass}
								</Link>
							</p>
						) : null}
						{data.weaponType ? (
							<p>
								<b>Weapon Type: </b>
								<Link
									to={`/characters/category?category=weaponType&value=${data.weaponType}`}
								>
									{data.weaponType}
								</Link>
							</p>
						) : null}
						{data.releaseDate ? (
							<p>
								<b>Release Date: </b>
								{data.releaseDate}
							</p>
						) : null}
						{data.skinSet ? (
							<p>
								<b>Skin set: </b>
								<Link
									to={`/characters/category?category=skinSet&value=${data.skinSet}`}
								>
									{data.skinSet.replaceAll('_', ' ')}
								</Link>
							</p>
						) : null}
						{data.url ? (
							<p>
								<b>source: </b>
								<a id={styles.charaUrl} href={data.url} target="_blank">
									{data.url}
								</a>
							</p>
						) : null}
					</div>
				</div>
			) : (
				<LoadingScreen />
			)}
		</>
	);
}
import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import { useRef } from 'react';
import LoadingScreen from '../components/loadingScreen';
import { Link } from 'react-router-dom';
import styles from '../styles/charaView.module.css';
