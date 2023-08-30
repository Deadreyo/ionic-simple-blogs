import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const container = document.getElementById('root');
const root = createRoot(container!);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ionic-simple-blogs.firebaseapp.com",
  projectId: "ionic-simple-blogs",
  storageBucket: "ionic-simple-blogs.appspot.com",
  messagingSenderId: "864626690506",
  appId: "1:864626690506:web:e9cd9415f310ecf491e733"
};

const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);