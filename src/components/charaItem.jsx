export default function CharaItem(props) {
	return (
		<Link to={props.charaName}>
			<p className={props.theme}>{props.charaName.replaceAll('_', ' ')}</p>
			<img
				src={`/media/${props.school}/${props.charaName}.png`}
				loading="lazy"
			/>
		</Link>
	);
}
import { Link } from 'react-router-dom';

//src={`/media/${props.school}/${props.imgSrc}.png`} alt={`${props.charaName} image`}
