import { Route, Routes } from 'react-router-dom';

//import Pages
import Home from './pages/home';
import AllCharacters from './pages/allCharacters';
import CategoryView from './pages/categoryView';
import CharaView from './pages/charaView';
import About from './pages/about';
import Page404 from './pages/page404';
import AllCategories from './pages/categoryView';

// loading
import { LoadingComponent } from './components/loadingComponent';
import { useContext } from 'react';
import { StoreContext } from './services/storeContext';

export function Routing() {
	const { loading } = useContext(StoreContext);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/characters" element={<AllCharacters />} />
			<Route path="/characters/:charaName" element={<CharaView />} />
			<Route path="/characters/category" element={<CategoryView />} />
			<Route
				path="/characters/category/:categoryName"
				element={<AllCategories />}
			/>
			<Route
				path="/characters/category/:categoryName/:categoryValue"
				element={<AllCharacters />}
			/>
			<Route
				path="/characters/category/:categoryName/:categoryValue/:charaName"
				element={<CharaView />}
			/>
			<Route path="about" element={<About />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
}
