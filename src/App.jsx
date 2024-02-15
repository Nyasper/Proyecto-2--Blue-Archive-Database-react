import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//Imports Components
import Navbar from './components/navbar';
import LoadingScreen from './components/loadingScreen';

//import Pages
import Home from './pages/home';
import AllCharacters from './pages/allCharacters';
import SelectSchool from './pages/selectSchool';
import CharaView from './pages/charaView';
import About from './pages/about';
import Page404 from './pages/page404';

export default function App() {
	//Loading Screen
	const [loadingScreen, setLoadingScreen] = useState(true);
	const loadingScreenF = () => setLoadingScreen(false);

	//inicilizate theme in 'light'.
	if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');

	//Theme
	const [theme, setTheme] = useState(localStorage.getItem('theme'));

	const switchTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		} else if (theme === 'dark') {
			setTheme('light');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<div
			className={theme === 'dark' ? 'mainDark' : 'mainLight'}
			id="mainContainer"
			onLoad={loadingScreenF}
		>
			<Navbar themes={theme} themeInput={switchTheme} />
			{loadingScreen ? (
				<LoadingScreen />
			) : (
				<Routes>
					<Route path="/" element={<Home theme={theme} />} />

					<Route path="/characters" element={<AllCharacters theme={theme} />} />

					<Route
						path="/characters/:charaName"
						element={<CharaView theme={theme} />}
					/>
					<Route
						path="/selectSchool"
						element={<SelectSchool theme={theme} />}
					/>
					<Route
						path="/selectSchool/:schoolName"
						element={<AllCharacters theme={theme} />}
					/>
					<Route
						path="/selectSchool/:schoolName/:charaName"
						element={<CharaView theme={theme} />}
					/>

					<Route
						path="/characters/category"
						element={<AllCharacters theme={theme} />}
					/>

					<Route
						path="/characters/category/:charaName"
						element={<CharaView theme={theme} />}
					/>

					<Route path="about" element={<About theme={theme} />} />

					<Route path="*" element={<Page404 theme={theme} />} />
				</Routes>
			)}
		</div>
	);
}
