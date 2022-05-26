//홈페이지 이동 막기

// CCTV 전용
let cctv_img_movearr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_img_movearr.push("img-move" + i);
}
// 주차장 전용
let parking_img_movearr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_img_movearr.push("  -move" + i);
}
// 클릭시 자신 빼고 나머지 색상 삭제을 위한 반복문
// CCTV 전용
let cctv_colorarr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr.push("cctvon" + i);
}
let cctv_colorarr1 = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr1.push("cctvon1-" + i);
}
// 주차장 전용
let parking_colorarr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr.push("parkingon" + i);
}
let parking_colorarr1 = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr1.push("parking0-" + i);
}
let move_number = 0;



// CCTV
export const cctvon =() => {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move0");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon0").classList.add("cctv-box-js");
    document.getElementById("cctvon1-0").classList.add("cctv-box-img-js");

}
export const cctvon1 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move1");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon1").classList.add("cctv-box-js");
    document.getElementById("cctvon1-1").classList.add("cctv-box-img-js");
}
export const cctvon2 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move2");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon2").classList.add("cctv-box-js");
    document.getElementById("cctvon1-2").classList.add("cctv-box-img-js");
}
export const cctvon3 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move3");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon3").classList.add("cctv-box-js");
    document.getElementById("cctvon1-3").classList.add("cctv-box-img-js");
}
export const cctvon4 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move4");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon4").classList.add("cctv-box-js");
    document.getElementById("cctvon1-4").classList.add("cctv-box-img-js");
}
export const cctvon5 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move5");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon5").classList.add("cctv-box-js");
    document.getElementById("cctvon1-5").classList.add("cctv-box-img-js");
}
export const cctvon6 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move6");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon6").classList.add("cctv-box-js");
    document.getElementById("cctvon1-6").classList.add("cctv-box-img-js");
}
export const off = () =>{
    document.querySelector(".map-state").classList.add("off-1");
    document.querySelector(".on").classList.remove("on-display");
}
export const on = () => {
    document.querySelector(".map-state").classList.remove("off-1");
    document.querySelector(".on").classList.add("on-display");
}
export const move = () => {
    if(move_number == 0){
    document.querySelector(".body-but-box").classList.add("go");
    document.querySelector(".body-but-box").classList.remove("go-2");
    document.querySelector(".slide-but-img").classList.add("go-img");
    document.querySelector(".slide-but-img").classList.remove("go-img-1");
    move_number =+ 1;
    } else {
    document.querySelector(".body-but-box").classList.add("go-2");
    document.querySelector(".body-but-box").classList.remove("go");
    document.querySelector(".slide-but-img").classList.add("go-img-1");
    document.querySelector(".slide-but-img").classList.remove("go-img");
    move_number = 0
    }
}
export const search_on1 = () => {
    document.getElementById("simple-search").classList.add("simple-search")
    document.getElementById("simple-search").classList.remove("area-search")

    document.getElementById("area-search").classList.add("area-search")
    document.getElementById("area-search").classList.remove("simple-search")
}
export const search_on2 = () => {
    document.getElementById("area-search").classList.add("simple-search")
    document.getElementById("area-search").classList.remove("area-search")

    document.getElementById("simple-search").classList.add("area-search")
    document.getElementById("simple-search").classList.remove("simple-search")
}
export const road_Selection_1 = () => {
    let x = document.getElementsByClassName("search-text-2")[0];
    x.innerText = "고속도로";
}
export const road_Selection_2 = () => {
    let x = document.getElementsByClassName("search-text-2")[0];
    x.innerText = "주요도로";
}
export const testboxoff = () => {
// cctv 켜져있는 버튼들 꺼짐
for (var color_remove = 0; color_remove <= 6; color_remove++) {
    let address = document.getElementById(cctv_colorarr[color_remove]);
    address.classList.remove("cctv-box-js");
}
for (var color_remove = 0; color_remove <= 6; color_remove++) {
    let address = document.getElementById(cctv_colorarr1[color_remove]);
    address.classList.remove("cctv-box-img-js");
}
// 펼쳐져 있는 지도 X 누를 시 지도 삭제
document.querySelector(".test-box").classList.add("test-display");
}
