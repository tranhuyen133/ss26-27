import React from 'react'

export default function bai1() {
    //render dữ liệu đối với function compement
    let fullName:string="rikkei eduction";
    let age:number=25;
    let student = {
        name:"hoa",
        age:20,
        address:"hà nội",
    }
    let number:number[]=[1,4,7,9];
  return (
    <div>
      <p>Bài 1</p>
      <p>Nội dung bài tập</p>
      <p>Hiển thị fullName : {fullName}</p>
    </div>
    
    /*
    khi retrun các elemet phải có thẻ fragment bọc bên ngoài
    */

  )
}
