import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import AppWrapper from "./App_wrapper";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
