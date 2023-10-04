export default function SchoolView(props){
    const {schoolName} = useParams()
    const { data } = useFetch(`schools/${schoolName}`)
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
            <section id="schoolViewContainer">
              <Header title={`School: ${schoolName}`} inputRef={searchRef} inputEvent={searching} theme={props.theme} />
              <CharaList data={data} charaListRef={charaListRef} theme={props.theme} />
            </section>
            )
          }
import { useFetch } from "../useFetch"
import { useParams } from "react-router-dom"
import CharaList from "./charaList"
import Header from "./header"
import { useRef } from "react"