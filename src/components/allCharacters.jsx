export default function Allcharacters(props){
    const { data } = useFetch('chara')
    const searchRef = useRef()
    const charaListRef = useRef()

    return (
          <div className={`${props.theme} gridRow2`} >
          <Header title='All Characters' theme={props.theme} inputRef={searchRef} inputEvent={()=>searching(charaListRef, searchRef)} />
          <CharaList data={data} theme={props.theme} charaListRef={charaListRef} imageProfileSrc={props.imageProfileSrc}  />
          </div>
          )
        }

import searching from "../utils/searchUtils.js"
import { useRef } from "react"
import { useFetch } from "../useFetch"
import CharaList from "./charaList"
import Header from "./header"