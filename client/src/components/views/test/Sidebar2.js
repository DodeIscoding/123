import React, { useState } from 'react';
import "../html/move.css"
import arrow from "../pic/arrow.svg"
import bar2 from "../test/Sidebar2.module.css"
import { move, input, output, search_on1, search_on2 } from '../js/back'
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import data from "./PopupPostCode"


export default function Test(props) {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)

    }

    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)

    }
    return (
        <div className={bar2.body_c}>
            <div id="body_but_box" className={bar2.body_but_box}>
                <div className={bar2.body_b}>
                    <div className={bar2.main}>
                        <div className={bar2.main_box}>
                            <div className={bar2.title_1_box} />
                            <p className={bar2.communication_info}>소통정보</p>
                        </div>
                    </div>
                    <div className={bar2.search_box}>
                        {/* 검색 선택창 */}
                        <div className={bar2.search_main}>
                            <div className={bar2.search_menu}>
                            </div>
                        </div>
                        <div className={bar2.search_box_1} />
                        {/* 검색창 */}
                        <div className={bar2.search}>
                            <div className={bar2.search_1}>
                                <p className={bar2.search_text}>도로명 </p>
                                <button onClick={openPostCode} className={bar2.search_button}>검색</button>
                            </div>
                        </div>
                    </div>
                    <div className={bar2.search_result}>
                        <div className={bar2.result_total}>
                            <div className={bar2.result_box}>
                                <div id="output" className={bar2.address_result}></div>
                                <p className={bar2.result}>검색결과</p>
                            </div>
                            <div className={bar2.total_box}>
                                <p className={bar2.total}>TOTAL</p>
                                <p className={bar2.total_number}></p>
                                <p className={bar2.total_gun}>건</p>
                            </div>
                        </div>
                        <div className={bar2.street}>
                            <div id="scroll" className={bar2.scroll}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={bar2.but_box}>
                    <button id={1} className={bar2.slide_button} onClick={move}>
                        <img id="slide_but_img" src={arrow} className={bar2.slide_but_img} />
                    </button>
                </div>
                <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode onClose={closePostCode} />
                        </PopupDom>
                    )}
                </div>
            </div>
        </div>
    )
}                                    