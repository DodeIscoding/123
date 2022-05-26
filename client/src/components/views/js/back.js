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



// CCTV
export const cctvon =() => {

}
export const cctvon1 = () =>{
  
}
export const cctvon2 = () =>{
  
}
export const cctvon3 = () =>{
  
}
export const cctvon4 = () =>{
  
}
export const cctvon5 = () =>{
  
}
export const cctvon6 = () =>{
  
}
export const on = () =>{

}
export const move = () => {

}
export const search_on1 = () => {

}
export const search_on2 = () => {
  
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

}
export const off = () => {

}