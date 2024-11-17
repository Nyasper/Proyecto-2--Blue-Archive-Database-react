import About from './about';
// import { GameInfoComponent } from '../components/gameInfoComponent';
import { db } from '../services/indexedDB';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		console.log(JSON.stringify(db.charas));
	}, []);
	return (
		<>
			{/* <GameInfoComponent /> */}

			<About />
		</>
	);
}
