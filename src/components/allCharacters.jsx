export default function Allcharacters(props){
    const { data } = useFetch('http://localhost:3000/api/chara')
    const searchRef = useRef()
    const charaListRef = useRef()
    const searching = ()=> {
      if(charaListRef.current && searchRef.current && searchRef.current.value.length>2){
        for (let i=0; i<charaListRef.current.children.length;i++) {
          if(!charaListRef.current.children[i].children[0].textContent.toLowerCase().startsWith(searchRef.current.value.toLowerCase())){
            charaListRef.current.children[i].classList.hidden=true
            charaListRef.current.children[i].children[0].hidden=true
            
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
          <section className={props.theme} >
            <div className="titleContainer">
            <Header title='All Characters' theme={props.theme} inputRef={searchRef} inputEvent={searching} />
            </div>
            <ul className="charaList" ref={charaListRef} >
              {data?.map((chara)=>(
              <li key={chara._id} className={`charaCard ${chara.charaName}`} >
                <CharaBox theme={props.theme} imgSrc={chara.charaName} charaName={chara.charaName.replaceAll('_',' ')} school={chara.school} url={chara.charaName} />
              </li>))
              }
            </ul>
          </section>
          
        ) : (
          <LoadingScreen />
        )
        }
      </>
    )
    }
import { useRef } from "react"
import { useFetch } from "../useFetch"
import CharaBox from "./charaBox"
import LoadingScreen from "./loadingScreen"
import Header from "./header"