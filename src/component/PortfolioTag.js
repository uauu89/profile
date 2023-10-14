import React, { Component } from "react";
export default class PortfolioTag extends Component{

    render(){

        return(
            <li>
                <input 
                    type="checkbox" id={"search_"+this.props.data.name} 
                    name="searchOption"
                    onChange={this.props.searchOption} 
                />
                <label 
                    htmlFor={"search_"+this.props.data.name}
                    className="customCheckbox"
                >
                </label>
                <label
                    htmlFor={"search_"+this.props.data.name}
                    className="tagStyle"
                    style={{backgroundColor : this.props.data.color}}
                >
                    {this.props.data.name}
                </label>
            </li>
        )
    }
}
