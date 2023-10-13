import React, { Component } from "react";

export default class PortfolioItem extends Component{

    render(){
        let arraySkill = this.props.data.skill.split(",");
        return(
            <li>
                <img src="img/test_480x360.jpg" alt="" style= {{borderColor: this.props.data.themeColor }} />
                <div className="portfolio_itemWrap">
                    <h3>{this.props.data.title}</h3>
                    <ul className="tagList">
                        {arraySkill.map((i, idx) => {
                            return <li key={idx} className={"tagStyle " + i}>{i}</li>
                        })}
                    </ul>
                    <ul className="linkList">
                        <li><a href={this.props.data.linkSite}>사이트 바로가기</a></li>
                        <li><a href={this.props.data.linkGithub}>깃허브 바로가기</a></li>
                        <li><a href={this.props.data.linkFigma}>피그마 바로가기</a></li>
                    </ul>
                    <p>기간 : <span>{this.props.data.dateStart} ~ {this.props.data.dateEnd}</span></p>
                    <p>{this.props.data.desc}</p>
                </div>
            </li>
        )
    }
}
