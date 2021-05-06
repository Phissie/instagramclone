import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

//If you want ti start measuring performance in your app, pass a function to log results 
//(for example: reportWebVitals(console.log))
//or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();