import { LoadingComponent } from './loadingComponent';
import { useContext, type ReactNode } from 'react';
import { StoreContext } from '../stores/storeContext';

export function MainContainer({ children }: Props) {
	const store = useContext(StoreContext);

	return (
		<div id="mainContainer">
			{children}
			{store?.loading && <LoadingComponent />}
		</div>
	);
}

interface Props {
	children: ReactNode;
}
