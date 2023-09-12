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

  return  (
    <nav id='navBarContainer' className={props.themes} >
      <ul id='navBar'className={props.themes} >
        <li id='logo'><Link className={props.themes} to={'/'}><img src='/extras/Shiroko_Swimsuit_Icon.png' id='logoImg' /></Link></li>
        <li><Link className={props.themes} to={'/characters'}>All Characters</Link></li>
        <li><Link className={props.themes} to={'/selectSchool'}>Select School</Link></li>
        <li><Link className={props.themes} to={'/about'}>About</Link></li>
        <li id='themeSection'>
            <i className="uil uil-moon icon" />
            <input type="range" min={0} max={1} name='theme' ref={themeInput} onLoad={defaulThemeValue()} onInput={props.themeInput} className='rangeInput' />
            <i className="uil uil-sun icon" />
        </li>
        </ul>
    </nav>
  )
}
import { Link } from 'react-router-dom'
import { useRef } from 'react'