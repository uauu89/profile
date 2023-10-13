import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Axios from "axios";

import '../css/Portfolio.css';
import PortfolioItem from "./PortfolioItem";




export default class Portfolio extends Component{

    state = {
        itemList : [],
        items : "",
    }

    // getList = ()=>{
    //     console.log("axios excute")
    //     Axios.get("http://localhost:8000/Portfolio", {})
    //     .then((res)=>{
    //         const {data} = res;
    //         this.setState({itemList : data});
    //         // this.state.itemList = data;
    //     })
    //     .catch(e=>console.error(e));
    // }

    getList = ()=>{
        fetch("http://localhost:8000/Portfolio")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.setState({itemList : data});
        })
        
    }


    componentDidMount(){
        this.getList();
    }

    render(){
        return(
            <section id="portfolio">
                <header>
                    <h2 className="hidden">포트폴리오 페이지</h2>
                    <div className="searchWrap">
                        <a href="#modal_searchOption" className="disLink btn_search">
                            사용언어로 검색하기
                        </a>
                        <form id="modal_searchOption" method="POST">
                            <button type="button" aria-label="검색모달 닫기 버튼" className="btn_close"><i className="fa-solid fa-x"></i></button>
                            <ul className="tagList">
                                <li>
                                    <input type="checkbox" id="search_html" name="searchOption" />
                                    <label htmlFor="search_html" className="customCheckbox"></label>
                                    <label htmlFor="search_html" className="tagStyle html">HTML5</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="search_css" name="searchOption" />
                                    <label htmlFor="search_css" className="customCheckbox"></label>
                                    <label htmlFor="search_css" className="tagStyle css">CSS</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="search_js" name="searchOption" />
                                    <label htmlFor="search_js" className="customCheckbox"></label>
                                    <label htmlFor="search_js" className="tagStyle js">JS</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="search_jQuery" name="searchOption" />
                                    <label htmlFor="search_jQuery" className="customCheckbox"></label>
                                    <label htmlFor="search_jQuery" className="tagStyle jQuery">jQuery</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="search_php" name="searchOption" />
                                    <label htmlFor="search_php" className="customCheckbox"></label>
                                    <label htmlFor="search_php" className="tagStyle php">php</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="search_github" name="searchOption" />
                                    <label htmlFor="search_github" className="customCheckbox"></label>
                                    <label htmlFor="search_github" className="tagStyle github">github</label>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <ul className="viewOptionWrap">
                        <li>
                            <input type="radio" id="view_list" name="viewOption" />
                            <label htmlFor="view_list" className="list">
                                <i className="fa-solid fa-list"></i>
                                <span className="hidden">목록형으로 보기</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="view_item" name="viewOption" />
                            <label htmlFor="view_item" className="item">
                                <i className="fa-solid fa-table-cells"></i>
                                <span className="hidden">바둑판형으로 보기</span>
                            </label>
                        </li>
                    </ul>
                </header>
                <ul className="portfolioList">
                    {this.state.itemList.map((i, idx)=><PortfolioItem key={idx} data={i}/>)}
                </ul>
                   
            </section>
        )
    }
}