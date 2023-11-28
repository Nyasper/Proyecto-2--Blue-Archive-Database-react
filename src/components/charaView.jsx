export default function CharaView(props){
  const urlName = useParams().charaName
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
              {data[0].name? <p><b>Name: </b><Link to={`/characters/category/name/${data[0].name}`}>{data[0].name}</Link></p> :null }
              {data[0].lastName? <p><b>Last Name: </b> {data[0].lastName}</p> :null}
              {data[0].age?<p><b>Age: </b> <Link to={`/characters/category/age/${data[0].age}`} >{data[0].age}</Link></p> :null }
              {data[0].school? <p><b>School: </b> <Link to={`../selectSchool/${data[0].school}`} >{data[0].school}</Link></p> :null}
              {data[0].birthday? <p><b>Birthday: </b>{data[0].birthday}</p> :null}
              {data[0].height? <p><b>Height: </b>{data[0].height}</p> :null}
              {data[0].hobbies? <p><b>Hobbies: </b>{data[0].hobbies}</p> :null}
              {data[0].designer? <p><b>Designer: </b> <Link to={`/characters/category/designer/${data[0].designer}`} >{data[0].designer}</Link></p> :null }
              {data[0].illustrator? <p><b>Illustrator: </b><Link to={`/characters/category/illustrator/${data[0].illustrator}`}>{data[0].illustrator}</Link></p> :null }
              {data[0].voice? <p><b>Voice: </b><Link to={`/characters/category/voice/${data[0].voice}`} >{data[0].voice}</Link>
              <audio ref={audioRef} onPlay={playingAudio} onEnded={playStopped} src={`/media/${data[0].school}/${data[0].charaName}.ogg`} />
              <i className={`uil uil-play ${styles.mediaIcon}`} ref={playButtonRef} onClick={playAudio} />
              <i className={`uil uil-stop-circle ${styles.mediaIcon}`} ref={stopButtonRef} onClick={stopPlay} hidden />
              </p> : null}
              {data[0].role? <p><b>Role: </b><Link to={`/characters/category/role/${data[0].role}`}>{data[0].role.replace('_','/')}</Link></p> :null}
              {data[0].combatClass? <p><b>Combat Class: </b><Link to={`/characters/category/combatClass/${data[0].combatClass}`}>{data[0].combatClass}</Link></p> :null }
              {data[0].weaponType? <p><b>Weapon Type: </b><Link to={`/characters/category/weaponType/${data[0].weaponType}`}>{data[0].weaponType}</Link></p> :null }
              {data[0].releaseDate? <p><b>Release Date: </b>{data[0].releaseDate}</p> :null }
              {data[0].url? <p><b>source: </b><a id={styles.charaUrl} href={data[0].url} target="_blank">{data[0].url}</a></p> :null}
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
import { useEffect, useRef } from "react"
import LoadingScreen from "./loadingScreen"
import { Link } from "react-router-dom"
import styles from "../styles/charaView.module.css"