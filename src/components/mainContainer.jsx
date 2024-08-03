import { LoadingComponent } from './loadingComponent';
import { useContext } from 'react';
import { StoreContext } from '@/services/storeContext';

export function MainContainer({ children }) {
	const { loading } = useContext(StoreContext);

	return (
		<div id="mainContainer">
			{children}
			{loading && <LoadingComponent />}
		</div>
	);
}
