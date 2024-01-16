export default function categoryView(props){
  const { categoryData } = useParams()
  console.log('categori data',categoryData)
  const { data } = useFetch(`/category/${props.categoryName}/${categoryData}`)
  const searchRef = useRef()
    const charaListRef = useRef()



    return (
            <div>
              <Header title={`${props.categoryName.toUpperCase()}: ${categoryData.replaceAll('_',' ')}`} inputRef={searchRef} inputEvent={()=>searching(charaListRef, searchRef)} theme={props.theme} />
              <CharaList data={data} charaListRef={charaListRef} theme={props.theme}  />
            </div>
            )
          }
          import searching from "../utils/searchUtils.js"
import { useFetch } from "../useFetch"
import { useParams } from "react-router-dom"
import CharaList from "./charaList"
import Header from "./header"
import { useRef } from "react"