import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/joy/styles';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Stor/UserSlice';
import RecipeSlice from './Stor/RecipeSlice';

const myStore = configureStore({
  reducer:{
    UserSlice,
    RecipeSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
