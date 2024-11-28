import CharaItem from './charaItem';
import styles from '@/styles/charaList.module.css';
import { useContext, useRef, useState } from 'react';
import { StoreContext } from '../stores/storeContext';
import { CharaListSideComponent } from './charaListSideComponent';
import { useEffect } from 'react';
import { Header } from './header';
import type { Student } from '../models/student.model';
import { getStudentMedia } from '../services/studentUtils';
import { useIsMobile } from '../hooks/useIsMobile';

export function CharaList({ title, students, error }: Props) {
	// Right Side Image Preview
	const store = useContext(StoreContext);
	const selectedImageRef = useRef<HTMLImageElement | null>(null);

	const isMobile: boolean = useIsMobile();

	const handleClick = (chara: Student) => {
		if (!store) return;
		store.changeCurrentCharacterPreview(
			chara.charaName,
			getStudentMedia(chara, 'imgFull')
		);

		if (selectedImageRef?.current?.classList) {
			selectedImageRef.current.classList.remove(styles.animationSlide);
			void selectedImageRef.current.offsetWidth;
			selectedImageRef.current.classList.add(styles.animationSlide);
		}
	};

	// reset the global state after component desmount
	useEffect(() => {
		return () => {
			if (!store) return;
			store.changeCurrentCharacterPreview('', '');
		};
	}, []);

	// Search Logic
	const [searchTerm, setSearchTerm] = useState('');
	function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(e.target.value);
	}

	let content: JSX.Element;

	if (error) {
		content = (
			<>
				<h2>Error</h2>
				<p>{error}</p>
			</>
		);
	} else if (students.length === 0 && !!store?.loading) {
		content = (
			<>
				<h2>Loading</h2>
			</>
		);
	} else if (students.length === 0 && store?.loading) {
		content = (
			<>
				<h2>No Data</h2>
			</>
		);
	} else {
		content = (
			<ul id={styles.charaList}>
				{students
					.filter((chara) => {
						return chara.charaName
							.toLowerCase()
							.replaceAll('_', ' ')
							.includes(searchTerm.toLowerCase());
					})
					.map((chara) => (
						<CharaItem
							key={chara.charaName}
							charaName={chara.charaName}
							school={chara.school}
							clickEvent={() => handleClick(chara)}
							withUrl={isMobile}
						/>
					))}
			</ul>
		);
	}

	return (
		<>
			<Header title={title} withSearchBar={true} handleSearch={handleSearch} />
			<div id={styles.charaListContainer}>
				<section>{content}</section>
				<CharaListSideComponent
					currentChara={store?.currentChara!}
					selectedImageRef={selectedImageRef}
				/>
			</div>
		</>
	);
}

interface Props {
	title: string;
	students: Student[];
	error: string | null;
}
