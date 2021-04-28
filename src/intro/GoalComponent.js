import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDog, faPaw} from '@fortawesome/free-solid-svg-icons'
import "./../css/Goal.css"

class GoalComponent extends Component {
    render() {
        return (
            <div>
                <div className="goal-title">
                    <FontAwesomeIcon icon={faDog} /> Goal
                </div>
                <div className="goal-list">
                    <div>
                        <FontAwesomeIcon icon={faPaw} /> 쓰지는 않는데 버리기는 아까운 것들, 여기서 팔거나 교환해요 !
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPaw} /> 애견카페, 동반카페, 펜션, 장소 등 정보 공유해요 !
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPaw} /> 산책, 카페 모임을 가져요 !
                    </div>
                </div>
            </div>
        );
    }
}
export default GoalComponent;