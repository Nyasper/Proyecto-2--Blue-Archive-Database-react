import CharaItem from './charaItem';
import styles from '@/styles/charaList.module.css';
import { useContext, useRef, useState } from 'react';
import { StoreContext } from '../stores/storeContext';
import { CharaListSideComponent } from './charaListSideComponent';
import { useEffect, type RefObject } from 'react';
import { Header } from './header';
import type { Student } from '../models/student.model';

export function CharaList({ title, data, charaListRef }: Props) {
	// Right Side Image Preview
	const store = useContext(StoreContext);
	const selectedImageRef = useRef<HTMLImageElement | null>(null);

	// TODO: change type Student to DBstrudent
	const handleClick = (chara: Student) => {
		if (!store) return;
		store.setCurrentCharaSelected(
			chara.charaName,
			`/media/${chara.school}/${chara.charaName}_full.png`
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
			store.setCurrentCharaSelected('', '');
		};
	}, []);

	// Search Logic
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<Header
				title={title}
				withSearchBar={true}
				handleSearch={(e) => handleSearch(e)} //TODO: ver si funciona sin (e)=>
			/>
			<h2>{searchTerm}</h2>
			<div id={styles.listMainContainer}>
				<ul id={styles.charaList} ref={charaListRef}>
					{data
						?.filter((chara) => {
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
							/>
						))}
				</ul>

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
	data: Student[];
	charaListRef: RefObject<any>;
}
