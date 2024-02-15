import { useState, useEffect } from 'react';

const mode = 'http://localhost:3000'; //localhost
// const mode = 'https://proyecto-2-backend.vercel.app'; //vercel cloud

export function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		searchData();
	}, [url]); // Escucha los cambios en la URL
	return { data };

	async function searchData() {
		try {
			const response = await fetch(`${mode}/api/chara/${url}`, {
				mode: 'cors',
			});
			const data = await response.json();
			setData(data);
		} catch (error) {
			console.log('Se ha producido un error:', error);
		}
	}
}
