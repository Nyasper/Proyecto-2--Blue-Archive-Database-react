import { useState, useEffect } from "react";

const local = 'http://localhost:3000'
const cloud = 'https://proyecto-2-backend.vercel.app'

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    try {
      const response = await fetch(`${cloud}/api/${url}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Se ha producido un error:", error);
    }
  }

  return { data };
}