/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";
import "../html/KakaoMap.css";

const { kakao } = window;

const Map = () => {
  
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.94828046699644, 126.95783758044811),
      level: 3,
    };

    
    let map = new window.kakao.maps.Map(container, options);
    //드래그 막기
    console.log("loading kakaomap");
  }, []);

  return (
    <div className={cn("Map")}>
      <div className={cn("MapContainer")} id="map">
      </div>
    </div>
  );
};

export default Map;