import Header2 from "../html/Communication/Header2"
import Sidebar2 from "../html/Communication/Sidebar2"
import Bottom from "../html/Bottom"
import Map from "../html/KakaoMap"
import Mini from "../html/Communication/mini_state2"
import React from 'react'


export default function Communication() {
    return (
        <div>
        <Map></Map>
        <Header2></Header2>
        <Mini/>
        <Sidebar2></Sidebar2>
        <Bottom></Bottom>
        </div>
    );
}