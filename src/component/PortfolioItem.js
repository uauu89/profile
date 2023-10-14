import React, { Component } from "react";

export default class PortfolioItem extends Component{

    render(){
        let arraySkill = this.props.data.skill.split(",");
        return(
            <li>
                <img src={this.props.data.imgSrc} alt="" style={{borderColor: this.props.data.themeColor}} />
                <div className="portfolio_itemWrap">
                    <h3>{this.props.data.title}</h3>
                    <ul className="tagList">
                        {arraySkill.map((i, idx) => {
                            let color = this.props.tagInfo.filter(c=>c.name === i)[0].color;
                            return <li key={idx} className="tagStyle" style={{backgroundColor : color}}>{i}</li>
                        })}
                    </ul>
                    <ul className="linkList">
                        <li>
                            <a href={this.props.data.linkSite} target="_blank" rel="noopener noreferrer">
                                사이트 바로가기
                            </a>
                        </li>
                        <li>
                            <a href={this.props.data.linkGithub} target="_blank" rel="noopener noreferrer">
                                깃허브 바로가기
                            </a>
                        </li>
                        <li>
                            <a href={this.props.data.linkFigma} target="_blank" rel="noopener noreferrer">
                                피그마 바로가기
                            </a>
                        </li>
                    </ul>
                    <p>기간 : <span>{this.props.data.dateStart} ~ {this.props.data.dateEnd}</span></p>
                    <p>{this.props.data.desc}</p>
                </div>
            </li>
        )
    }
}
