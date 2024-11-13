import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './history_bd/history_bd';


const store = new Store();

export const Context = createContext({
  store
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      store
    }}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Context.Provider>
);

reportWebVitals();