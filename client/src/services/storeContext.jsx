import { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
	//State
	const [currentChara, setCurrentChara] = useState(null);
	const [loading, setLoading] = useState(false);
	//Change State
	const setCurrentCharaSelected = (name, url) => setCurrentChara({ name, url });
	const setLoadingState = (state) => setLoading(state);

	return (
		<StoreContext.Provider
			value={{
				currentChara,
				setCurrentCharaSelected,
				loading,
				setLoadingState,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};
