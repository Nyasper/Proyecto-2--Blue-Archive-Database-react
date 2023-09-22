export default function HeaderNoSearch(props){
  return(
  <header id={styles.titleContainer}>  
  <h1 className={`${styles.title} ${props.theme}`} >{props.title}</h1>
  </header>
  )
}
import styles from "../styles/header.module.css"