import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoPage from './NoPage';
import Home from './home';
import Weapons from './Weapons';
import Maps from "./Maps";
import Quiz from "./Quiz";
import Katowice  from './katowice';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          
          <Route index element={<Home />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="maps" element={<Maps />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="katowice" element={<Katowice />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
