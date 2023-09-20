export default function Page404(props){
  return(
<section id={styles.p404}>
<div id={styles.p404Container} className={props.theme === 'dark' ? `${props.theme} outlineDark` : `${props.theme} outlineLight`} >
<h4>404</h4>
<img src="/extras/Shiroko_Sprite.webp" alt="Shiroko picture" />
<h5>NOT FOUND</h5>
</div>
</section>
  )
}
import styles from "../styles/page404.module.css"