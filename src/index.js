import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import middleware from "./middleware";
import reducer from "./reducers";


const store = createStore(reducer, middleware);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store = { store }>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
