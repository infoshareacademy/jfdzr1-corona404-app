import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLNaHPn38hy5O0EbpDWKvuLJOewTomUGE",
  authDomain: "corona404-2499f.firebaseapp.com",
  databaseURL: "https://corona404-2499f.firebaseio.com",
  projectId: "corona404-2499f",
  storageBucket: "corona404-2499f.appspot.com",
  messagingSenderId: "39805912809",
  appId: "1:39805912809:web:1fc0345daebad5560c1278",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
