import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../stores/storeContext';

// export const mode = 'http://localhost:3000'; //localhost
// export const mode = 'https://proyecto-2-backend.vercel.app'; //vercel cloud

// function manageResponseUrl(url = 'all', data = []) {
// 	// filter by Category
// 	if (url.includes('category/') && url.includes('?value=')) {
// 		const categoryName = url.split('category/')[1].split('?')[0];
// 		const categoryValue = url.split('?value=')[1];
// 		return data.filter((c) => c[categoryName] == categoryValue);
// 	}

// 	// filter by charaName
// 	const byCharaName = data.find((c) => c.charaName === url);
// 	if (byCharaName) return byCharaName;

// 	return data;
// }

export function useFetch<T>(url: string) {
	const store = useContext(StoreContext);

	const [data, setData] = useState<T | undefined>();
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchData() {
			store?.setLoadingState(true);
			try {
				const response = await fetch(url, { signal });

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data: T = await response.json();
				setData(data);
			} catch (e) {
				if (e instanceof DOMException && e.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					setError(`Error on Getting Data: \n${(e as Error).message}`);
					console.error(e);
				}
			} finally {
				store?.setLoadingState(false);
			}
		}

		fetchData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, error };
}
