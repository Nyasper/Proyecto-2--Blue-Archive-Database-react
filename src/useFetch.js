import { useState, useEffect } from "react";

const local = 'http://localhost:3000'
const cloud = 'https://proyecto-2-backend.vercel.app/'

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    try {
      const response = await axios.get(`${cloud}/api/${url}`, {
        headers: {
          'Access-Control-Allow-Origin': 'https://blue-archive-database.vercel.app',
        },
      });

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Se ha producido un error:", error);
    }
  }

  return { data };
}