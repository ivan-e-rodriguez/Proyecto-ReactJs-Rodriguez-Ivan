import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa18aLTf0uo-wZb6bqEkeYU_P-ldaVbBA",
  authDomain: "coderhouse-ecommerce-76383.firebaseapp.com",
  projectId: "coderhouse-ecommerce-76383",
  storageBucket: "coderhouse-ecommerce-76383.appspot.com",
  messagingSenderId: "140423501338",
  appId: "1:140423501338:web:ad3ae1495d3e1c9d8223a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

