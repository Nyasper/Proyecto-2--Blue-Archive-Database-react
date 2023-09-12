export default function SelectSchool(props){
  const { data } = useFetch('http://localhost:3000/api/schools')
  const searchBarRef = useRef()
  if (searchBarRef.current) searchBarRef.current.hidden=true
  
  return (
    <>
    {data  ? (
      <>
      <h1 className={`title ${props.theme}`} >Select a School</h1>
      <ul id="selectSchool" className={props.theme} >
      {data?.map((school,index)=>(
        <li key={index}>
          <p>{school}</p>
          <Link to={'./'+school}>
            <img src={'/extras/schools/'+school+'.png'} alt={school+' School'} />
          </Link>
        </li>))}
      </ul>
      </>
    ) : (
      <LoadingScreen />
    )
    }
    </>
  )
}
import { Link } from "react-router-dom"
import { useFetch } from "../useFetch"
import LoadingScreen from "./loadingScreen"
import { useRef } from "react"
import './selectSchool.css'
import Header from "./header"