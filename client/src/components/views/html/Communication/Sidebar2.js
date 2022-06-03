import React from 'react'
import "../../html/move.css"
import arrow from "../../pic/arrow.svg"
import bar2 from "./Sidebar2.module.css"
import { move, input, output, search_on1, search_on2 } from '../../js/back'


export default function Sidebar2() {
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
                                <button id="simple_search" onClick={search_on1} className={bar2.simple_search}>간편검색</button>
                                <button id="area_search" onClick={search_on2} className={bar2.area_search}>지역검색</button>
                            </div>
                        </div>
                        <div className={bar2.search_box_1} />
                        {/* 검색창 */}
                        <div className={bar2.search}>
                            <div className={bar2.search_1}>
                                <p className={bar2.search_text}>도로명 <input onChange={input} id="input" className={bar2.search_input} type="text" maxLength={16} /></p>
                                <button onClick={output} className={bar2.search_button}>검색</button>
                            </div>
                        </div>
                    </div>
                    <div className={bar2.search_result}>
                        <div className={bar2.result_total}>
                            <div className={bar2.result_box}>
                                <div id="output" className={bar2.address_result}>익산</div>
                                <p className={bar2.result}>검색결과</p>
                            </div>
                            <div className={bar2.total_box}>
                                <p className={bar2.total}>TOTAL</p>
                                <p className={bar2.total_number}>15</p>
                                <p className={bar2.total_gun}>건</p>
                            </div>
                        </div>
                        <div className={bar2.street}>
                            <div className={bar2.scroll}>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                                <div className={bar2.address}>
                                    전라북도 익산시 고현로(익산)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={bar2.but_box}>
                    <button id={1} className={bar2.slide_button} onClick={move}>
                        <img id="slide_but_img" src={arrow} className={bar2.slide_but_img} />
                    </button>
                </div>
            </div>
        </div>
    )
}