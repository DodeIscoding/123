import React from 'react'
import "../css/CCTV.css"
import cctvimg from "../pic/cctv-svgrepo-com.svg"
import arrow from "../pic/arrow.svg"
import message from "../pic/message-svgrepo-com.svg"
import parking from "../pic/parking-svgrepo-com.svg"
import traffic from "../pic/traffic-light-svgrepo-com.svg"
import { cctvon } from "../js/back"
import { cctvon1 } from "../js/back"
import { cctvon2 } from "../js/back"
import { cctvon3 } from "../js/back"
import { cctvon4 } from "../js/back"
import { cctvon5 } from "../js/back"
import { cctvon6 } from "../js/back"
import { on } from "../js/back"
import { move } from "../js/back"
import { search_on1 } from "../js/back"
import { search_on2 } from "../js/back"
import { road_Selection_1 } from "../js/back"
import { road_Selection_2 } from "../js/back"
import { testboxoff } from "../js/back"
import { off } from "../js/back"
  
function Footer() {

      return (
        <div> 
          <div className="bottom">
            <div className="bottom-menu">
              {/* 위치랑 전화번호 */}
              <div className="company-information">
                <div className="company-information-list">
                  <div className="company">전라북도 익산 무왕로2길 414</div>
                  <div className="company">대표전화 (063)859-4541</div>
                  <div className="company">Copyright(c) 2022 IKSANCITY All rights reserved</div>
                </div>
              </div>
              {/* 모니터링단홈페이지 */}
              <div className="mon_dec_box">
                <div className="monitoring">
                  <div className="monitoring-1">
                    <a href="/main.html" className="bottom-menu-1">모니터링단홈페이지</a>
                  </div>
                </div>
                {/* 교통불편민원신고 */}
                <div className="declaration">
                  <a href="http://www.molit.go.kr/irocm/USR/WPGE0201/m_15604/DTL.jsp" target="_blank" className="bottom-menu-1">교통불편민원신고</a>
                </div>
              </div>
              {/* 관련사이트 목록 */}
              <div className="Related-sites">
                <select name="company-list" id="select" className="select" onchange="window.open(value,sel_val())" style={{paddingRight: '20px'}}>
                  <option id={1} value="none" disabled selected>관련사이트</option>
                  <option id={2} value="https://www.iksan.go.kr/index.iksan?menuCd=DOM_000002017000000000">익산시청
                  </option>
                  <option id={3} value="https://www.police.go.kr/index.do">경찰청</option>
                  <option id={4} value="https://www.tago.go.kr/">TAGO</option>
                  <option id={5} value="http://www.molit.go.kr/portal.do">국토교통부</option>
                  <option id={6} value="https://www.koroad.or.kr/">도로교통공단</option>
                  <option id={7} value="https://www.ex.co.kr/">한국도로공사</option>
                  <option id={8} value="https://www.tbn.or.kr/">TBN전북교통방송</option>
                  <option id={9} value="https://www.its.go.kr/">국가교통정보</option>
                </select>
              </div>
            </div>
          </div>
          <img className="background-img" src={require("../pic/test.png")} />
          <div className="body-a">
            {/* 홈페이지 로그 */}
            <div className="iksan-img">
              <a href="./main.html" className="dog">
                <div className="img-text-bundle">
                  <img clsaaName="iksan" src={require("../pic/iksan.png")} bordar={0} alt="준비중" style={{marginTop: '12px'}} width={60} height={50} />
                  <div className="img-text-box">
                    <p className="img-text">익산시교통정보센터</p>
                    <p className="img-text-eh">IKSAN City Traffic Imformation Center</p>
                  </div>
                </div>
              </a>
            </div>
            {/* 메뉴창 */}
            <div className="menu">
              <div className="menu-list">
                {/* 소통정보창 */}
                <a href="./Communication.html" className="menu-link">
                  <div className="img-1">
                    <img className="Traffic_Light" src={traffic} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className="menu-link-text">소통정보</p>
                  </div>
                  <div className="menu-box1">
                    <div className="menu-box_2" />
                  </div>
                </a>
                {/* CCTV */}
                <a href="./CCTV.html" className="menu-link-1">
                  <div className="img-1">
                    <img className="Traffic_Light" src={cctvimg} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className="menu-link-text">CCTV</p>
                  </div>
                  <div className="menu-box1">
                    <div className="menu-box_3" />
                  </div>
                </a>
                {/* 주차장 정보 */}
                <a href="./parking.html" className="menu-link">
                  <div className="img-1">
                    <img className="Traffic_Light" src={parking} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className="menu-link-text">주차장 정보</p>
                  </div>
                  <div className="menu-box1">
                    <div className="menu-box_2" />
                  </div>
                </a>
                {/* 공지사항 */}
                <a href="./announcement-1.html" className="menu-link">
                  <div className="img-1">
                    <img className="Traffic_Light" src={message} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className="menu-link-text">공지사항</p>
                  </div>
                  <div className="menu-box1">
                    <div className="menu-box_2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="body-c">
            <div className="body-but-box">
              <div className="body-b">
                {/* CCTV */}
                <div className="main">
                  <div className="main-box">
                    <div className="title-1-box" />
                    <p className="communication-info">CCTV</p>
                  </div>
                </div>
                {/* 검색창 코드들 */}
                <div className="search-box">
                  {/* 검색 선택창 */}
                  <div className="search-main">
                    <div className="search-menu">
                      <button id="simple-search" onClick={search_on1} className="simple-search">간편검색</button>
                      <button id="area-search" onClick={search_on2} className="area-search">지역검색</button>
                    </div>
                  </div>
                  <div className="search-box-1" />
                  {/* 검색창 */}
                  <div className="search">
                    <div className="search-1">
                      <p className="search-text">도로명 <input className="search_input" type="text" /></p>
                      <div className="road-Selection">
                        <p className="search-text-2">주요도로</p>
                        <button onClick={road_Selection_1} className="road-Selection-1">고속도로</button>
                        <button onClick={road_Selection_2} className="road-Selection-2">주요도로</button>
                      </div>
                      <button type="button" className="search_button">검색</button>
                    </div>
                  </div>
                </div>
                {/* 검색 결과들 */}
                <div className="search-result">
                  <div className="street">
                    <div className="scroll">
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">평동로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~동산동 동산교</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">목천대로 <br />안복로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                      <div className="address">
                        <p className="address-address">남북로</p>
                        <div className="address-list">
                          <p className="address-addres-1">평화동 시외버스터미널 앞</p>
                          <p className="address-addres-2">~신용동 도치부락 입구</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 슬라이드  */}
              <div className="but-box">
                <button id={1} className="slide-button" onClick={move}>
                  <img src={arrow} className="slide-but-img" />
                </button>
              </div>
            </div>
            {/* 지도 위에 있는 상태창 */}
            <button className="on on-display" onClick={on} id="on">↑</button>
            <div className="map-state">
              <div className="map-date">
                <p className="map-date-text">기준</p>
                <p className="map-date-text-1">2020.03.10 01:06</p>
                <button className="off" onClick={off} id="off">x</button>
              </div>
              <div className="info-color">
                <div className="good">원활</div>
                <div className="wait">지체</div>
                <div className="stop">정체</div>
                <div className="no">정보없음</div>
              </div>
              <div className="map-state-text">
                <ul>
                  <li className="map-state-text-1">등급별 툴팁으로 상세정보 확인이 가능합니다.<p />
                  </li><li className="map-state-text-2">현장의 실제속도와는 차이가 있을 수 있습니다.<p />
                  </li></ul>
              </div>
            </div>
            {/* CCTV 버튼 클릭시 나오는 지도 */}
            <div id="test-box" className="test-box test-display">
              <div className="test-box-title">
                <div>
                  <p className="test-box-title1">남북로</p>
                </div>
                <button className="test-box-but" onClick={testboxoff}>
                  <img className="test-box-but-img" src="./pic/x.png" />
                </button>
              </div>
              <div className="test-box-img-box">
                <img className="test-box-img" src="./pic/test1.png" />
              </div>
            </div>
            {/* 지도 위에 있는 CCTV 버튼들 */}
            <button className="cctv-box" onClick={cctvon} id="cctvon0" style={{marginTop: '500px', marginLeft: '500px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-0" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon1} id="cctvon1" style={{marginTop: '550px', marginLeft: '830px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-1" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon2} id="cctvon2" style={{marginTop: '400px', marginLeft: '850px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-2" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon3} id="cctvon3" style={{marginTop: '350px', marginLeft: '1030px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-3" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon4} id="cctvon4" style={{marginTop: '470px', marginLeft: '640px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-4" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon5} id="cctvon5" style={{marginTop: '435px', marginLeft: '1430px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-5" src={cctvimg} />
              </div>
            </button>
            <button className="cctv-box" onClick={cctvon6} id="cctvon6" style={{marginTop: '310px', marginLeft: '1360px'}}>
              <div className="cctv-box-1">
                <img className="cctv-box-img" id="cctvon1-6" src={cctvimg} />
              </div>
            </button>
            {/* 지도 위에 있는 미니 상태창 */}
            <div className="mini-state">
              <div className="mini-box">
                <div className="mini-wait">
                  <p className="mini-wait-text">정체</p>
                </div>
                <div className="mini-road">
                  <p className="mini-road-text">인덕원로[기린로4가~전북광장]</p>
                </div>
                <div className="mini-km">
                  <p className="mini-km-text">10Km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Footer