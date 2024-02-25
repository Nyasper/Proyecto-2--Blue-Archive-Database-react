export default function CharaList(props) {
	return (
		<ul id={styles.charaList} ref={props.charaListRef}>
			{props.data.map((chara) => (
				<li key={chara._id}>
					<CharaItem
						charaName={chara.charaName}
						school={chara.school}
						theme={props.theme}
					/>
				</li>
			))}
		</ul>
	);
}
import CharaItem from './charaItem';
import styles from '../styles/charaList.module.css';
