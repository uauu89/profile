// import {Component} from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import '../css/App.css';

import Introduction from "./Introduction";
import Portfolio from "./Portfolio";



function App(){

  const [portfolioGroup, setPortfolioGroup] = useState({
    tag : [],
    load : false,
    list : [],
  })
  
  
  return(

    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header>
            <h1 className="hidden">이순욱 개인 포트폴리오 사이트</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">안녕하세요</NavLink></li>
                    <li><NavLink to="/Portfolio">포트폴리오</NavLink></li>
                </ul>
            </nav>
        </header>

        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="/Portfolio" element={<Portfolio data={portfolioGroup} setPortfolioGroup={setPortfolioGroup}/>}></Route>
        </Routes>
    </BrowserRouter>
  )

}

export default App;