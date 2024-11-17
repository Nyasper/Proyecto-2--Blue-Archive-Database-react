import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './main.css';
import { StoreProvider } from './stores/storeContext.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('root element not found');

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<StoreProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProvider>
	</React.StrictMode>
);
