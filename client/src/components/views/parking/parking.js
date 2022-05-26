import React from 'react'
  import "../css/parking.css"
import cctvimg from "../pic/cctv-svgrepo-com.svg"
import arrow from "../pic/arrow.svg"
import message from "../pic/message-svgrepo-com.svg"
import parking from "../pic/parking-svgrepo-com.svg"
import traffic from "../pic/traffic-light-svgrepo-com.svg"
import { parkingon1 } from "../js/back"
import { parkingon2 } from "../js/back"
import { parkingon3 } from "../js/back"
import { parkingon4 } from "../js/back"
import { parkingon5 } from "../js/back"
import { parkingon6 } from "../js/back"
import { on } from "../js/back"
import { move } from "../js/back"
import { search_on1 } from "../js/back"
import { search_on2 } from "../js/back"
import { road_Selection_1 } from "../js/back"
import { road_Selection_2 } from "../js/back"
import { testboxoff } from "../js/back"
import { off } from "../js/back"
import { Link } from 'react-router-dom'

 
function parkingPage() {
      return (
        <div>
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
                      <a href="/mainPage" className="bottom-menu-1">모니터링단홈페이지</a>
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
                    <img clsaa="iksan" src={require("../pic/iksan.png")} bordar={0} width={60} height={50} alt="" style={{marginTop: '12px'}} />
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
                  <a href="/=Communication.html" className="menu-link">
                    <div className="img-1">
                      <img className="Traffic_Light" src="pic/traffic-light-svgrepo-com.svg" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                      <p className="menu-link-text">소통정보</p>
                    </div>
                    <div className="menu-box1">
                      <div className="menu-box_2" />
                    </div>
                  </a>
                  {/* CCTV */}
                  <Link to="/cctvPage" className="menu-link">
                    <div className="img-1">
                      <img className="Traffic_Light" src="pic/cctv-svgrepo-com.svg" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                      <p className="menu-link-text">CCTV</p>
                    </div>
                    <div className="menu-box1">
                      <div className="menu-box_2" />
                    </div>
                  </Link>
                  {/* 주차장 정보 */}
                  <a href="#" className="menu-link-1" onClick={e => e.preventDefault}>
                    <div className="img-1">
                      <img className="Traffic_Light" src="pic/parking-svgrepo-com.svg" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                      <p className="menu-link-text">주차장 정보</p>
                    </div>
                    <div className="menu-box1">
                      <div className="menu-box_3" />
                    </div>
                  </a>
                  {/* 공지사항 */}
                  <a href="./announcement-1.html" className="menu-link">
                    <div className="img-1">
                      <img className="Traffic_Light" src="pic/message-svgrepo-com.svg" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
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
                      <p className="communication-info">주차장 정보</p>
                    </div>
                  </div>
                  {/* 검색창 코드들 */}
                  <div className="search-box">
                    {/* 검색 선택창 */}
                    <div className="search-main">
                      <div className="search-menu">
                        <button id="simple-search" onclick="search_on1()" className="simple-search">간편검색</button>
                        <button id="area-search" onclick="search_on2()" className="area-search">지역검색</button>
                      </div>
                    </div>
                    <div className="search-box-1" />
                    {/* 검색창 */}
                    <div className="search">
                      <div className="search-1">
                        <p className="search-text">도로명 <input className="search_input" type="text" /></p>
                        <button type="button" className="search_button">검색</button>
                      </div>
                    </div>
                  </div>
                  {/* 검색 결과들 */}
                  <div className="search-result">
                    <div className="street">
                      <div className="scroll">
                        <div className="address">
                          <p className="address-address">함열파출소 옆<br />공영주차장</p>
                          <div className="address-list">
                            <p className="address-addres-1">함라면 함열리 432</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">중앙시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 창인동 1가 104-14</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">시동시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 창인동 1가 112</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">북부시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 남중동 12-1</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">매일시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 창인동 1가 131-18</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">황등시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 황등면 황드리 588-2</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">함열시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 함열읍 와리 545-262</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">남부시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">익산시 인화동 1가 119</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">금마시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">금마 4길 7</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">금리면 동고도리</p>
                          <div className="address-list">
                            <p className="address-addres-1">금마면 동고도리 683</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">함열읍 남당리</p>
                          <div className="address-list">
                            <p className="address-addres-1">함열읍 남당리 740-16</p>
                          </div>
                        </div>
                        <div className="address">
                          <p className="address-address">중앙시장</p>
                          <div className="address-list">
                            <p className="address-addres-1">함라면 함열리 432</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="but-box">
                  <button id={1} className="slide-button" onclick="move()">
                    <img src="./pic/arrow.svg" className="slide-but-img" />
                  </button>
                </div>
              </div>
              <div id="mini-state" className="mini-state">
                <div className="mini-box" style={{display: 'flex'}}>
                  <div className="mini-wait">
                    <p className="mini-wait-text">원활</p>
                  </div>
                  <div className="mini-road">
                    <p className="mini-road-text">인덕원로[기린로4가~전북광장]</p>
                  </div>
                  <div className="mini-km">
                    <p className="mini-km-text">10Km/h</p>
                  </div>
                </div>
              </div>
              {/* 주차장 버튼 클릭시 나오는 지도 */}
              <div id="test-box" className="test-box test-display">
                <div className="test-box-title">
                  <div>
                    <p className="test-box-title1">북부시장</p>
                  </div>
                  <button className="test-box-but" onclick="testboxoff_parkingon()">
                    <img className="test-box-but-img" src="./pic/x.png" />
                  </button>
                </div>
                <div className="test-box-text-box">
                  <div className="parking-number">
                    <div className="parking-divbox">
                      <p className="parking-num-text">주차구획수</p>
                      <div className="parking-border" />
                      <p className="parking-num-number">131</p>
                    </div>
                  </div>
                  <div className="parking-date">
                    <div className="parking-divbox">
                      <p className="parking-date-text">운영요일</p>
                      <div className="parking-border" />
                      <p className="parking-date-number">평일+토요일+공휴일</p>
                    </div>
                  </div>
                  <div className="parking-clock">
                    <div className="parking-divbox">
                      <p className="parking-clock-text">운영시간</p>
                      <div className="parking-border" />
                      <p className="parking-clock-number">12:00 ~ 24:00</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 지도 위에 있는 CCTV 버튼들 */}
              <button className="parking-box" onclick="parkingon1()" id="parkingon1" style={{marginLeft: '600px', marginTop: '430px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-1" src="./pic/map-parking.png" />
                </div>
              </button>
              <button className="parking-box" onclick="parkingon2()" id="parkingon2" style={{marginLeft: '525px', marginTop: '365px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-2" src="./pic/map-parking.png" />
                </div>
              </button>
              <button className="parking-box" onclick="parkingon3()" id="parkingon3" style={{marginLeft: '1100px', marginTop: '325px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-3" src="./pic/map-parking.png" />
                </div>
              </button>
              <button className="parking-box" onclick="parkingon4()" id="parkingon4" style={{marginLeft: '860px', marginTop: '415px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-4" src="./pic/map-parking.png" />
                </div>
              </button>
              <button className="parking-box" onclick="parkingon5()" id="parkingon5" style={{marginTop: '482px', marginLeft: '1280px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-5" src="./pic/map-parking.png" />
                </div>
              </button>
              <button className="parking-box" onclick="parkingon6()" id="parkingon6" style={{marginTop: '455px', marginLeft: '1400px'}}>
                <div className="parking-box-1">
                  <img className="parking-box-img" id="parking0-6" src="./pic/map-parking.png" />
                </div>
              </button>
              {/* 지도 위에 있는 상태창 */}
              <button className="on on-display" onclick="on()" id="on">↑</button>
              <div className="map-state">
                <div className="map-date">
                  <p className="map-date-text">기준</p>
                  <p className="map-date-text-1">2020.03.10 01:06</p>
                  <button className="off" onclick="off()" id="off">x</button>
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
            </div>
          </div>
          {/*  */}
        </div>
      );
    }

export default parkingPage