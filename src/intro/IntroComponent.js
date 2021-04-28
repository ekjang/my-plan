import React, { Component } from "react";
import Typical from "react-typical"
import jerry from "./../image/jerry1.svg"
import "./../css/Intro.css"

class IntroComponent extends Component {


    render() {

        return (
            <div>
                <div>
                    <span className="intro-title">
                        <Typical steps={["반려인들을 위한 직거래 시스템", 1000, "뼈다귀 마켓", 500]}
                            loop={1}
                            wrapper="p"
                        />
                    </span>
                    <span className="blinking">
                        <img src={jerry} />
                    </span>
                </div>
            </div>
        );
    }
}
export default IntroComponent;