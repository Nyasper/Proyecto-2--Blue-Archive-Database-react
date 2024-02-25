import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Imports Components
import Navbar from './components/navbar';
import LoadingScreen from './components/loadingScreen';

//import Pages
import Home from './pages/home';
import AllCharacters from './pages/allCharacters';
import CategoryView from './pages/categoryView';
import CharaView from './pages/charaView';
import About from './pages/about';
import Page404 from './pages/page404';
import AllCategories from './pages/categoryView';

export default function App() {
	//Loading Screen
	const [loadingScreen, setLoadingScreen] = useState(true);
	const loadingScreenF = () => setLoadingScreen(false);

	//inicilizate theme in 'light'.
	if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');

	//Theme
	const [theme, setTheme] = useState(localStorage.getItem('theme'));

	useEffect(() => {
		// Cuando el tema cambie, actualiza la clase del body
		document.body.className = theme === 'dark' ? 'mainDark' : 'mainLight';
	}, [theme]);

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
		<div id="mainContainer" onLoad={loadingScreenF}>
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
						path="/characters/category"
						element={<CategoryView theme={theme} />}
					/>
					<Route
						path="/characters/category/:categoryName"
						element={<AllCategories theme={theme} />}
					/>
					<Route
						path="/characters/category/:categoryName/:categoryValue"
						element={<AllCharacters theme={theme} />}
					/>
					<Route
						path="/characters/category/:categoryName/:categoryValue/:charaName"
						element={<CharaView theme={theme} />}
					/>

					<Route path="about" element={<About theme={theme} />} />

					<Route path="*" element={<Page404 theme={theme} />} />
				</Routes>
			)}
		</div>
	);
}
