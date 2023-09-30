import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZTre5fIHMya49rwGMJT4ZSSJVmn18Ayk",
  authDomain: "coderhousereact-nico.firebaseapp.com",
  projectId: "coderhousereact-nico",
  storageBucket: "coderhousereact-nico.appspot.com",
  messagingSenderId: "652684978912",
  appId: "1:652684978912:web:3c9e02562e3f8ca960be85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
