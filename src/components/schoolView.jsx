export default function SchoolView(props){
    const {schoolName} = useParams()
    const { data } = useFetch(`schools/${schoolName}`)
    const searchRef = useRef()
    const charaListRef = useRef()

    return (
            <section id="schoolViewContainer">
              <Header title={`School: ${schoolName}`} inputRef={searchRef} inputEvent={()=>searching(charaListRef, searchRef)} theme={props.theme} />
              <CharaList data={data} charaListRef={charaListRef} theme={props.theme} />
            </section>
            )
          }

import searching from "../utils/searchUtils.js"
import { useFetch } from "../useFetch"
import { useParams } from "react-router-dom"
import CharaList from "./charaList"
import Header from "./header"
import { useRef } from "react"