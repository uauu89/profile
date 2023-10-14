import { Component } from "react";
import PortfolioTag from "./PortfolioTag";

import '../css/PortfolioForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default class PortfolioForm extends Component{

    render(){
        return(
            <form id="modal_searchOption" method="POST">
                <button 
                    type="button"
                    aria-label="검색모달 닫기 버튼"
                    className="btn_close"
                    onClick={this.props.openOption}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <ul className="tagList">
                    {this.props.data.tag.map(i => 
                        <PortfolioTag key={i.key} data={i} searchOption={this.props.searchOption} />
                    )}
                </ul>
            </form>
        )
    }
}