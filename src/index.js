import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom";
import AppWrapper from "./App_wrapper";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
