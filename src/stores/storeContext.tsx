import { createContext, useState, type ReactNode } from 'react';
import type { Student } from '../models/student.model';
import { useStudents } from '../hooks/useStudents';

export const StoreContext = createContext<StoreContextType | undefined>(
	undefined
);

export const StoreProvider = ({ children }: Props) => {
	// State
	const [currentChara, setCurrentChara] =
		useState<CharacterImageGlobalState | null>(null);
	const [loading, setLoading] = useState(false);
	const { students, error: studentsError } = useStudents();

	// Change State
	const changeCurrentCharacterPreview = (name: string, url: string) =>
		setCurrentChara({ name, url });
	const setLoadingState = (loadingNewValue: boolean) =>
		setLoading(loadingNewValue);

	return (
		<StoreContext.Provider
			value={{
				students,
				studentsError,
				currentChara,
				changeCurrentCharacterPreview,
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
	setLoadingState: (loadingNewValue: boolean) => void;
	loading: boolean;
	changeCurrentCharacterPreview: (name: string, url: string) => void;
	students: Student[];
	studentsError: string | null;
	currentChara: CharacterImageGlobalState | null;
}
