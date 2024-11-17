import { createContext, useState, type ReactNode } from 'react';

export const StoreContext = createContext<StoreContextType | undefined>(
	undefined
);

export const StoreProvider = ({ children }: Props) => {
	// State
	const [currentChara, setCurrentChara] =
		useState<CharacterImageGlobalState | null>(null);
	const [loading, setLoading] = useState(false);

	// Change State
	const setCurrentCharaSelected = (name: string, url: string) =>
		setCurrentChara({ name, url });
	const setLoadingState = (loadingNewValue: boolean) =>
		setLoading(loadingNewValue);

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

interface Props {
	children: ReactNode;
}
export interface CharacterImageGlobalState {
	name: string;
	url: string;
}

export interface StoreContextType {
	currentChara: CharacterImageGlobalState | null;
	setCurrentCharaSelected: (name: string, url: string) => void;
	loading: boolean;
	setLoadingState: (loadingNewValue: boolean) => void;
}
