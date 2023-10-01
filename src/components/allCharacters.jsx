export default function Allcharacters(props){
    const { data } = useFetch('http://localhost:3000/api/chara')
    const searchRef = useRef()
    const charaListRef = useRef()
    const searching = ()=> {
      if(charaListRef.current && searchRef.current && searchRef.current.value.length>2){
        for (let i=0; i<charaListRef.current.children.length;i++) {
          if(!charaListRef.current.children[i].children[0].textContent.toLowerCase().startsWith(searchRef.current.value.toLowerCase())){
            charaListRef.current.children[i].classList.add('Hide')
            charaListRef.current.children[i].children[0].classList.add('Hide')
          }

          else if(charaListRef.current.children[i].children[0].textContent.toLowerCase().startsWith(searchRef.current.value.toLowerCase())){
            charaListRef.current.children[i].classList.remove('Hide')
            charaListRef.current.children[i].children[0].classList.remove('Hide')
          }

          }
        } else if (charaListRef.current && searchRef.current){
            for (let i=0; i<charaListRef.current.children.length;i++) {
              charaListRef.current.children[i].classList.remove('Hide')
              charaListRef.current.children[i].children[0].classList.remove('Hide')
            }
        }
      }
    return (
          <div className={`${props.theme} gridRow2`} >
            <Header title='All Characters' theme={props.theme} inputRef={searchRef} inputEvent={searching} />
          <CharaList data={data} theme={props.theme} charaListRef={charaListRef} />
          </div>
          )
        }
import { useRef } from "react"
import { useFetch } from "../useFetch"
import CharaList from "./charaList"
import Header from "./header"