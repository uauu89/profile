import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "../css/Introduction.css"

class Introduce extends Component{

    render(){
        return(
            <>
                <section id="main" className="secIntroduction">
                    <h2 className="hidden">메인 페이지</h2>
                    <div>
                        <p>
                            안녕하세요, <br />
                            <span>웹퍼블리셔/프론트엔드</span> <span>개발자 지망생</span><br />
                            이순욱입니다
                        </p>
                    </div>
                </section>

                <footer>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>이메일 :</span>
                        uauu89@gmail.com
                    </p>
                </footer>
            </>
        )
    }
}
export default Introduce;