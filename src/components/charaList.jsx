export default function CharaList(props){
    return (
      <>
       {props.data ? (
      <ul id={styles.charaList} ref={props.charaListRef} >
      {props.data.map((chara)=>(
        <li key={chara._id} >
        <CharaItem charaName={chara.charaName.replaceAll('_',' ')} school={chara.school} imgSrc={chara.charaName} url={chara.charaName} theme={props.theme} localImageProfileSrc={chara.localImageProfileSrc} />
        </li>))}
      </ul>
      ) : (
        <LoadingScreen />
      )
      }
      </>
    )
}
import CharaItem from "./charaItem"
import LoadingScreen from "./loadingScreen"
import styles from "../styles/charaList.module.css"