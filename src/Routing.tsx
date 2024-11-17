import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { LoadingComponent } from './components/loadingComponent';
//import Pages
const AllCharacters = lazy(() => import('./pages/allCharacters'));
const CategoryView = lazy(() => import('./pages/categoryView'));
const CharaView = lazy(() => import('./pages/charaView'));
const About = lazy(() => import('./pages/about'));
const Page404 = lazy(() => import('./pages/page404'));
const AllCategories = lazy(() => import('./pages/categoryView'));

const Home = lazy(() => import('./pages/home'));

export function Routing() {
	return (
		<Suspense fallback={<LoadingComponent />}>
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
		</Suspense>
	);
}
