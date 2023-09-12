export default function CharaBox(props){
   return(
    <Link to={props.url}  >
      <p className={props.theme} >{props.charaName}</p>
      <img src={`/media/${props.school}/${props.imgSrc}.png`} alt={`${props.charaName} image`}  />
    </Link>
    )
}
import { Link } from "react-router-dom"
import './charaBox.css'