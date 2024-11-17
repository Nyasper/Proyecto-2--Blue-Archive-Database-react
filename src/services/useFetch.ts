import { useState, useEffect, useContext } from 'react';
import { getKeysWithoutUndefined } from './categoryHandler';
import { StoreContext } from '../stores/storeContext';
import { lastUpdateLS } from './localStorage';
import { DaysPassed } from './dateHandler';
import { db } from './indexedDB';
import type { StoreContextType } from '../stores/storeContext';
// export const mode = 'http://localhost:3000'; //localhost
export const mode = 'https://proyecto-2-backend.vercel.app'; //vercel cloud
let daysPassed = DaysPassed;
const maxDaysToCache = 14;

function manageResponseUrl(url = 'all', data = []) {
	// filter by Category
	if (url.includes('category/') && url.includes('?value=')) {
		const categoryName = url.split('category/')[1].split('?')[0];
		const categoryValue = url.split('?value=')[1];
		return data.filter((c) => c[categoryName] == categoryValue);
	}

	// filter by charaName
	const byCharaName = data.find((c) => c.charaName === url);
	if (byCharaName) return byCharaName;

	return data;
}

export function useFetch<T>(url: string) {
	const store = useContext(StoreContext);

	const [data, setData] = useState<T>();
	const [error, setError] = useState(null);
	const [categories, setCategories] = useState([]); // item keys

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchData() {
			if (!store) return;
			store.setLoadingState(true);
			try {
				// days passed from the last fetch
				if (daysPassed >= maxDaysToCache) {
					// fetch
					const response = await fetch(`${mode}/api/chara/all`, {
						mode: 'cors',
						signal,
					});
					const data: T = await response.json();
					// update lastFetchDate in Local Storage
					lastUpdateLS.value = new Date();
					// manageResponseUrl(url, data)
					setData(data);
					setCategories(getKeysWithoutUndefined(data[1]));
					// Save data in IndexedDB
					db.updateDB(data);
				} else {
					// load the data from IndexedDB
					const charactersIndexedDB = await db.charas.toArray();

					// if no updated data in IndexedDB force the fetch again
					if (charactersIndexedDB && charactersIndexedDB.length < 180) {
						daysPassed = maxDaysToCache + 1;
						return fetchData();
					}
					setData(manageResponseUrl(url, charactersIndexedDB));
					setCategories(getKeysWithoutUndefined(charactersIndexedDB[1]));
				}
			} catch (error) {
				setError('Error on Getting Data, please try again later.');
				console.error(error);
			} finally {
				setLoadingState(false);
			}
		}

		fetchData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, categories, error };
}
