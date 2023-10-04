export default function CharaView(props){
  const urlName = useParams().charaName
  console.log(urlName)
  //Fetch
  const { data } = useFetch(`chara/${urlName}`)

  //Audio Play

  //refs
  const audioRef   = useRef(null)
  const playButtonRef = useRef(null)
  const stopButtonRef = useRef(null)


  const playAudio = ()=> {
      audioRef.current.volume = .1
      audioRef.current.play()
      playButtonRef.current.hidden = true
    }

  const playingAudio = ()=> {
    stopButtonRef.current.hidden = false
  }

  const playStopped = ()=> {
    console.log('se termino de reproducir')
    stopButtonRef.current.hidden = true
    playButtonRef.current.hidden = false

  }

  const stopPlay = ()=> {
    audioRef.current.load()
    stopButtonRef.current.hidden = true
    playButtonRef.current.hidden = false
  }
    return (
      <>
 {data? (
   <div id={styles.charaViewContainer} className={props.theme} > 
              <img src={`/media/${data[0].school}/${data[0].charaName}_full.png`} alt={`${data[0].charaName}`} id={styles.fullImage}/>
              <div id={styles.infoTable}>
              <h2>{data[0].charaName.replaceAll('_',' ')} </h2>
              <p><b>Name: </b><Link to={`/characters/category/name/${data[0].name}`}>{data[0].name}</Link></p>
              <p><b>Last Name: </b> {data[0].lastName}</p>
              <p><b>Age: </b> <Link to={`/characters/category/age/${data[0].age}`} >{data[0].age}</Link></p>
              <p><b>School: </b> <Link to={`../selectSchool/${data[0].school}`} >{data[0].school}</Link></p>
              <p><b>Birthday: </b>{data[0].birthday}</p>
              <p><b>Height: </b>{data[0].height}</p>
              <p><b>Hobbies: </b>{data[0].hobbies}</p>
              <p><b>Designer: </b> <Link to={`/characters/category/designer/${data[0].designer}`} >{data[0].designer}</Link></p>
              <p><b>Illustrator: </b><Link to={`/characters/category/illustrator/${data[0].illustrator}`}>{data[0].illustrator}</Link></p>
              <p><b>Voice: </b><Link to={`/characters/category/voice/${data[0].voice}`} >{data[0].voice}</Link>
              <audio ref={audioRef} onPlay={playingAudio} onEnded={playStopped} src={`/media/${data[0].school}/${data[0].charaName}.ogg`} />
              <i className={`uil uil-play ${styles.mediaIcon}`} ref={playButtonRef} onClick={playAudio} />
              <i className={`uil uil-stop-circle ${styles.mediaIcon}`} ref={stopButtonRef} onClick={stopPlay} hidden />
              </p>
              <p><b>Role: </b><Link to={`/characters/category/role/${data[0].role}`}>{data[0].role.replace('_','/')}</Link></p>
              <p><b>Combat Class: </b><Link to={`/characters/category/combatClass/${data[0].combatClass}`}>{data[0].combatClass}</Link></p>
              <p><b>Weapon Type: </b><Link to={`/characters/category/weaponType/${data[0].weaponType}`}>{data[0].weaponType}</Link></p>
              <p><b>Release Date: </b>{data[0].releaseDate}</p>
              <p><b>source: </b><a id={styles.charaUrl} href={data[0].url} target="_blank">{data[0].url}</a></p>
              </div>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </>
    )
    }
import {  useParams } from "react-router-dom"
import { useFetch  } from "../useFetch"
import { useRef } from "react"
import LoadingScreen from "./loadingScreen"
import { Link } from "react-router-dom"
import styles from "../styles/charaView.module.css"