import { Navbar } from './components/navbar';
import { MainContainer } from './components/mainContainer';
import { Router } from './Router';

export default function App() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<Router />
			</MainContainer>
		</>
	);
}
