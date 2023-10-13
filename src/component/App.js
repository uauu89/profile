// import {Component} from 'react';
import { BrowserRouter, Link, Routes, Route, NavLink, useParams } from "react-router-dom";

import '../css/App.css';
import '../css/Header.css';
// import '../test.css';

import Introduce from "./Introduce";
import Portfolio from "./Portfolio";

// import Header from './Header';
// import Main from './Main';





function App(){
  console.log("App render");

  let portfolioData = [
    {
      title : "테스트 제목1",
      skill : "react, github, php",
      linkSite : "https://naver.com",
      linkGithub : "https://github.com", 
      linkFigma : "https://figma.com",
      dateStart : "2021.01.01",
      dateEnd : "2031.01.01",
      desc : "테스트 설명1",
    },
    {
      title : "테스트 제목2",
      skill : "react, github, php",
      linkSite : "https://naver.com",
      linkGithub : "https://github.com", 
      linkFigma : "https://figma.com",
      dateStart : "2021.01.01",
      dateEnd : "2031.01.01",
      desc : "테스트 설명2",
    },
    {
      title : "테스트 제목3",
      skill : "react, github, php",
      linkSite : "https://naver.com",
      linkGithub : "https://github.com", 
      linkFigma : "https://figma.com",
      dateStart : "2021.01.01",
      dateEnd : "2031.01.01",
      desc : "테스트 설명3",
    },
  ]

  return(
    <BrowserRouter>
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
          <Route path="/" element={<Introduce />}></Route>
          <Route path="/Portfolio" element={<Portfolio data={portfolioData} />}></Route>
        </Routes>
    </BrowserRouter>
  )

}

export default App;