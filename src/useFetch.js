import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    try {
      const response = await fetch(`https://proyecto-2-backend.vercel.app/api/${url}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Se ha producido un error:", error);
    }
  }

  return { data };
}

// export function fetchYande(character) {

// const [data, setData] = useState(null);

//   useEffect(() => {
//     searchData();
//   }, []);

// async function searchYande
//   const response = await fetch(
//     `https://yande.re/post.json?tags=blue_archive+rating%3As+${character}`
//   );
//   const data = await response.json();
//   return data;
// }

/*
mismo ejemplo pero con .then()

import { useState, useEffect } from "react";

export function useFetch(url){
  const [data, setData] = useState(null);

    useEffect( () =>{
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])
    return { data }
};

*/
