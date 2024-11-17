import { Navbar } from './components/navbar';
import { MainContainer } from './components/mainContainer';
import { Routing } from './Routing';

export default function App() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<Routing />
			</MainContainer>
		</>
	);
}
