import React from 'react';
import map_state from "./Map_state.module.css"
import { on, off } from "../js/back"

export default function Map_state() {

    return (
        <div>
            <button className={map_state.on} onClick={on} id="on">↑</button>
            <div className={map_state.map_state}>
                <div className={map_state.map_date}>
                    <p className={map_state.map_date_text}>기준</p>
                    <p className={map_state.map_date_text_1}>2020.03.10 01:06</p>
                    <button className={map_state.off} onclick={off} id="off">x</button>
                </div>
                <div className={map_state.info_color}>
                    <div className={map_state.good}>원활</div>
                    <div className={map_state.wait}>지체</div>
                    <div className={map_state.stop}>정체</div>
                    <div className={map_state.no}>정보없음</div>
                </div>
                <div className={map_state.map_state_text}>
                    <ul>
                        <li className={map_state.map_state_text_1}>등급별 툴팁으로 상세정보 확인이 가능합니다.<p />
                        </li>
                        <li className={map_state.map_state_text_2}>현장의 실제속도와는 차이가 있을 수 있습니다.<p />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}