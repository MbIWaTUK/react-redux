
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store"
import { BrowserRouter } from "react-router-dom";
import StoreContext from './storeContext';
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    {/* <StoreContext.Provider value={store}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App
        // state={store.getState()} 
        // dispatch={store.dispatch.bind(store)} 
        />
      </BrowserRouter>
    </Provider>
    {/* </StoreContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();