import CharaItem from './charaItem';
import styles from '@/styles/charaList.module.css';
import { useContext, useRef, useState } from 'react';
import { StoreContext } from '@/services/storeContext';
import { CharaListSideComponent } from './charaListSideComponent';
import { useEffect } from 'react';
import { Header } from './header';

export function CharaList({ title, data, charaListRef }) {
	// Right Side Image Preview
	const { currentChara, setCurrentCharaSelected } = useContext(StoreContext);
	const selectedImageRef = useRef(null);
	const handleClick = (chara) => {
		setCurrentCharaSelected(
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
			setCurrentCharaSelected('', '');
		};
	}, []);

	// Search Logic
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<Header title={title} searchBar={true} handleSearch={handleSearch} />
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
								key={chara._id}
								charaName={chara.charaName}
								school={chara.school}
								clickEvent={() => handleClick(chara)}
							/>
						))}
				</ul>

				<CharaListSideComponent
					currentChara={currentChara}
					selectedImageRef={selectedImageRef}
				/>
			</div>
		</>
	);
}
