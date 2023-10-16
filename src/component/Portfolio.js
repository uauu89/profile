import React, { Component } from "react";
// import Axios from "axios";

import '../css/Portfolio.css';
import PortfolioItem from "./PortfolioItem";
import PortfolioForm from "./PortfolioForm";
// import PortfolioTag from "./PortfolioTag";




export default class Portfolio extends Component{

    state = {
        tag : this.props.data.tag,
        load : this.props.data.load,
        list : this.props.data.list,
        empty : false,
        searchMethod : "And"
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
        if(!this.state.load){
            // fetch("http://localhost:8000/Portfolio")
            fetch("http://101.101.211.45:8000/Portfolio")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tag : res[0],
                    list : res[1]
                });
                this.props.setPortfolioGroup({
                    tag : res[0],
                    load : true,
                    list : res[1]
                })
            })
        }
    }


    openOption = (e)=>{
        e.preventDefault();
        document.querySelector(".btnSearchWrap").classList.toggle("active");
    }

    checkViewOption = ()=>{
        document.querySelector(".portfolioList").classList.toggle("table");
    }
    checkSearchMethod = (e)=>{
        document.querySelectorAll(".tagList input[name='searchOption']:checked").forEach(i=>{
            i.checked = false;
        })
        this.setState({
            list : this.props.data.list,
            empty : false
        })
        let checkValue = e.currentTarget.getAttribute("id").replace("search", "");
        this.setState({searchMethod : checkValue});
    }

    searchOption = ()=>{
        let checkedDom = document.querySelectorAll("input[name=searchOption]:checked"),
            checkedSkill = [];
        checkedDom.forEach(i=>checkedSkill.push(i.getAttribute("id").replace("search_", "")));
        
        let result = [];
        if(this.state.searchMethod === "And"){
            // result = [...this.props.data.list];
            this.props.data.list.forEach(i=>{
                let check = true;
                for(let word of checkedSkill){
                    if(i.skill.indexOf(word) === -1){
                        check = false;
                        break;
                    }
                }
                if(check){
                    result.push(i);
                }
            })
    
            if(checkedSkill.length){
                this.setState({
                    list: result,
                    empty : result.length ? false: true
                })
            }else{
                this.setState({
                    list : this.props.data.list,
                    empty : false
                })
            }
        }else{
            this.props.data.list.forEach(i=>{
                for(let word of checkedSkill){
                    if(i.skill.indexOf(word) > -1){
                        result.push(i);
                        break;
                    }
                }
            })
    
            if(checkedSkill.length){
                this.setState({
                    list:result,
                    empty : result.length ? false: true
                })
            }else{
                this.setState({
                    list : this.props.data.list,
                    empty : false
                })
            }
        }
    };

    componentDidMount(){
        this.getList();
    }
    
    render(){
        return(
            <section id="portfolio" className="secPortfolio">
                <header>
                    <h2 className="hidden">포트폴리오 페이지</h2>
                    <div className="btnSearchWrap">
                        <a
                            href="#modal_searchOption"
                            className="disLink btn_search"
                            onClick={this.openOption}
                        >
                            사용언어로 검색하기
                        </a>
                        <PortfolioForm 
                            openOption = {this.openOption}
                            data = {this.state}
                            searchOption = {this.searchOption}
                            checkSearchMethod = {this.checkSearchMethod}
                        />
                    </div>
                    <ul className="viewOptionWrap">
                        <li>
                            <input type="radio" id="view_list" name="viewOption" onChange={this.checkViewOption}/>
                            <label htmlFor="view_list" className="list">
                                <i className="fa-solid fa-list"></i>
                                <span className="hidden">목록형으로 보기</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="view_table" name="viewOption" onChange={this.checkViewOption} defaultChecked/>
                            <label htmlFor="view_table" className="table">
                                <i className="fa-solid fa-table-cells"></i>
                                <span className="hidden">바둑판형으로 보기</span>
                            </label>
                        </li>
                    </ul>
                </header>
                <ul className="portfolioList table">
                    {this.state.empty ? (<p className="noResult">조건에 맞는 결과가 없습니다.</p>) : (this.state.list.map((i, idx)=><PortfolioItem key={idx} data={i} tagInfo={this.state.tag}/>))}
                </ul>
                   
            </section>
        )
    }
}