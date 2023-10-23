export default function Navbar(props){

//Input ref
const themeInput = useRef(null)

////detect default theme for the input
  const defaulThemeValue = ()=> {
    if(themeInput.current){
    if (localStorage.getItem('theme') === 'light' || !localStorage.getItem('theme')) {
      themeInput.current.value = 1
    }
    else if (localStorage.getItem('theme') === 'dark') {
      themeInput.current.value = 0
    }
  }
  }
const Links= [
    {
      name: "All Characters",
      path: "/characters"
    },
    {
      name:"Select School",
      path:"/selectSchool"
    },
    {
      name:"About",
      path:"/about"
    }
]

  return  (
    <nav  className={`${props.themes}`} >
      <ul id={styles.navBarContainer} className={props.themes} >
        <li id={styles.logo}><Link className={props.themes} to={'/'}><img src='/extras/Shiroko_Swimsuit_Icon.png' id={styles.logoImg} /></Link></li>
        {Links.map(link=>(
          <li key={link.name}><Link to={link.path} className={props.themes} >{link.name}</Link></li>
        ))}
        <li id={styles.themeSection}>
            <i className={`uil uil-moon ${styles.icon}`} />
            <input type="range" min={0} max={1} name='theme' ref={themeInput} onLoad={defaulThemeValue()} onInput={props.themeInput} id={styles.rangeInput} />
            <i className={`uil uil-sun ${styles.icon}`} />
        </li>
        </ul>
    </nav>
  )
}
import { Link } from "react-router-dom"
import { useRef } from "react"
import styles from "../styles/navbar.module.css"