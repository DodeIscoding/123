import React, { useState, useEffect } from 'react';
import DaumPostcode from "react-daum-postcode";
import KakaoMap from "../html/KakaoMap"

const PopupPostCode = () => {
  const [fullAddressname, setFullAddressname] = useState();
  const [Address,setAddress] = useState();

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
    setFullAddressname(fullAddress);
  }

  const Address_count = (data1) =>{
    let address_number = data1.count
    setAddress(address_number)
  };
  function seting_address(addressData) {
    addressData(Address)
  }

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    width: "365px",
    height: "560px",
  };

  return (
    <div>
      <KakaoMap setAddress={fullAddressname} />
      <DaumPostcode style={postCodeStyle}  onSearch={Address_count} onComplete={handlePostCode} autoClose={false} />
    </div>
  )
}

export default PopupPostCode;