export default function Header(props){
  return(
  <header id="titleContainer">  
  <h1 className={`title ${props.theme}`} >{props.title}</h1>
  <input type="text" id="searchBar" placeholder="Search..." onInput={props.inputEvent} ref={props.inputRef} />
  </header>
  )
}