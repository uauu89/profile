import {Component} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './css/Common.css';
import styles from  "./css/App.module.css"
import Introduction from "./component/Introduction";
import Portfolio from "./component/Portfolio";



export default class App extends Component{

  state = {
    tag : [],
    load : false,
    list : [],
    menu : "home",
  }

  setPortfolioGroup = e => {
    this.setState(e)
  }

  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header>
            <h1 className="hidden">이순욱 개인 포트폴리오 사이트</h1>
            <nav>
                <ul className={styles.gnb}>
                    <li>
                      <NavLink to="/" 
                        className={this.state.menu === "home" ? styles.active : ""}
                        onClick={e=>{
                          this.setState({menu : "home"})
                        }}
                      >
                          안녕하세요
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/portfolio"
                        className={this.state.menu === "pofol" ? styles.active : ""}
                        onClick={e=>{
                          this.setState({menu : "pofol"})
                        }}
                      >
                        포트폴리오
                      </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="/portfolio" element={
            <Portfolio 
              data={this.state}
              setPortfolioGroup={this.setPortfolioGroup}
            />}>

          </Route>
        </Routes>
      </BrowserRouter>

    )
  }
}