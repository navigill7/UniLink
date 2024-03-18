import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import authReducer from "./state/index"
import { Provider } from 'react-redux';
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react"
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
