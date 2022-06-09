import React,{ useState,useEffect } from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = ({parentFunction}) => {
  const [fullAddress1,setfullAddress1] = useState();
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
        document.getElementById("output").innerText = data.query
        setfullAddress1(fullAddress)
    }
    
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        width: "365px",
        height: "460px",
        padding: "7px",
      };
      const postCode_btn = {
        width: "100px",
        position: "absolute",
        height: "50px",
      };
    return(
        <div>
                <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
                <button onClick={console.log(props)} />
        </div>
    )
}
 
export default PopupPostCode;