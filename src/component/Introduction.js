import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


import styles from "../css/Introduction.module.css"

class Introduce extends Component{

    render(){
        return(
            <>
                <section id="main">
                    <h2 className="hidden">메인 페이지</h2>
                    <div className={styles.wrap}>
                        <p>
                            안녕하세요, <br />
                            <span>웹퍼블리셔/프론트엔드</span> <span>개발자 지망생</span><br />
                            <em className={styles.myName}>이순욱 입니다</em>
                        </p>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className={styles.mailTitle}>이메일 :</span>
                        uauu89@gmail.com
                    </p>
                </footer>
            </>
        )
    }
}
export default Introduce;