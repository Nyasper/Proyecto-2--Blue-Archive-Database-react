import { useState, useEffect } from 'react';

// export const mode = 'http://localhost:3000'; //localhost
export const mode = 'https://proyecto-2-backend.vercel.app'; //vercel cloud

export function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		searchData();
	}, [url]);
	return { data };

	async function searchData() {
		try
		{
			const response = await fetch(`${mode}/api/chara/${url}`, {
				mode: 'cors',
			});
			const data = await response.json();
			setData(data);
		} catch (error)
		{
			console.error('Se ha producido un error al intentar realizar la petición fetch:', error);
			setData(null)
		}
	}
}

export function useFetchWithCategories(url) {
	const categoriesBlackList = ["pageUrl", "pageImageProfileUrl", "pageImageFullUrl", "audioUrl", "files"];

	const [data, setData] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		searchData();
	}, [url]);
	return { data, categories };

	async function searchData() {
		try
		{
			const response = await fetch(`${mode}/api/chara/${url}`, {
				mode: 'cors',
			});
			const data = await response.json();
			setData(data);
			const keys = Object.keys(data).slice(1);
			const keysWithoutUndefined = keys.filter(p => data[p] && !categoriesBlackList.includes(p));
			setCategories(keysWithoutUndefined);
		} catch (error)
		{
			console.error('Se ha producido un error al intentar realizar la petición fetch:', error);
			setData(null)
		}
	}
}
