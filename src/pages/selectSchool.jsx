export default function SelectSchool(props) {
	const { data } = useFetch('schools/all');
	const searchBarRef = useRef();
	if (searchBarRef.current) searchBarRef.current.hidden = true;
	return (
		<>
			{data ? (
				<div>
					<HeaderNoSearch title="Select a School" theme={props.theme} />
					<ul id={styles.selectSchool} className={props.theme}>
						{data?.map((school, index) => (
							<li key={index}>
								<p>{school}</p>
								<Link to={'./' + school}>
									<img
										src={`/extras/schools/${school}.png`}
										alt={`${school} image`}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			) : (
				<LoadingScreen />
			)}
		</>
	);
}
import { Link } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';
import LoadingScreen from '../components/loadingScreen';
import { useRef } from 'react';
import HeaderNoSearch from '../components/headerNoSearch';
import styles from '../styles/selectSchool.module.css';
