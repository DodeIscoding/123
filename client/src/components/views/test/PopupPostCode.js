import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        console.log()
        props.onClose()
        document.getElementById("output").innerText = data.query
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(fullAddress);
        newDiv.appendChild(newText);
        document.getElementById("scroll").appendChild(newDiv)
    }
    
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        width: "365px",
        height: "460px",
        padding: "7px",
      };
      const postCode_btn = {
        position: "absolute",
        width: "100px",
        height: "100px",
        margin: "450px 0px 0px 0px",
      };
    return(
        <div>
                <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
                <button type='button' onClick={() => {props.onClose()}} style={postCode_btn}>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;