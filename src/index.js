/*
 * @Descripttion: 
 * @version: 
 * @Author: zkb
 * @Date: 2022-06-14 15:05:54
 * @LastEditors: zkb
 * @LastEditTime: 2022-09-14 11:07:32
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Word from "./component/word/word"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Word word="function" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
