export default function Home(props){
  return(
    <div className={`${props.theme} ${styles.homeContainer}`} >
    <h1>Welcome to my App</h1>
    <img src="public/extras/Shiroko_Swimsuit_Icon.png" alt="shiroko_picture" className={styles.homeImg} />
    </div>
  )
}
import styles from "../styles/homePage.module.css"