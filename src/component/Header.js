import { Component } from "react";

class Header extends Component{

    render(){
        return(
            <header>
                <h1 className="hidden">이순욱 개인 포트폴리오 사이트</h1>
                <nav>
                    <ul>
                        <li><a href="#" className="disLink active">안녕하세요</a></li>
                        <li><a href="#" className="disLink">포트폴리오</a></li>
                        <li><a href="#" className="disLink">경력사항</a></li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Header;