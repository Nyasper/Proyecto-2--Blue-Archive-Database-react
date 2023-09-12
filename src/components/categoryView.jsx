export default function categoryView(props){
  const {categoryData} = useParams()
  const { data } = useFetch(`http://localhost:3000/api/category/${props.categoryName}/${categoryData}`)

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
    <>
     {data  ? (
      <section id="schoolViewContainer">
        <Header title={`${props.categoryName.toUpperCase()}: ${categoryData.replace('_',' ')}`} inputRef={searchRef} inputEvent={searching} />
      <ul className="charaList" ref={charaListRef} >
      {data?.map((chara)=>(
        <li key={chara._id} className={`charaCard`}>
         <CharaBox imgSrc={chara.charaName} charaName={chara.charaName.replaceAll('_',' ')} school={chara.school} url={`../characters/${chara.charaName}`} theme={props.theme} />
        </li>))}
      </ul>
      </section>
     ) : (
      <LoadingScreen />
     )
    }
    </>
    )
    }
import { useFetch } from "../useFetch"
import { useParams } from "react-router-dom"
import CharaBox from "./charaBox"
import LoadingScreen from "./loadingScreen"
import Header from "./header"
import { useRef } from "react"