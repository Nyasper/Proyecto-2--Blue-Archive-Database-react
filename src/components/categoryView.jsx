export default function categoryView(props){
  const {categoryData} = useParams()
  const { data } = useFetch(`category/${props.categoryName}/${categoryData}`)
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
            <div>
              <Header title={`${props.categoryName.toUpperCase()}: ${categoryData.replace('_',' ')}`} inputRef={searchRef} inputEvent={searching} theme={props.theme} />
              <CharaList data={data} charaListRef={charaListRef} theme={props.theme}  />
            </div>
            )
          }
import { useFetch } from "../useFetch"
import { useParams } from "react-router-dom"
import CharaList from "./charaList"
import Header from "./header"
import { useRef } from "react"