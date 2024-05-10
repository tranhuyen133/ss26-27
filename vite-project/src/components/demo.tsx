import React from 'react'
interface Product{
    name:string,
    price:number,
    id:number,
}
export default function Demo() {
    //render dữ liệu với funtion compenent
    let fullName:string = "Minh thu";
    let age:number=25;
    let student={
        name:"hoa",
        age :20,
        address:"hà nội"

    }
    let numbers:number[]=[1,4,7,9];
    let students:string[]=["thu","ngọc","lan"];
    let products:Product[]=[
        {
        name:"iphone5",
        price:5000,
       id:1
    },
    {
        name:"iphone6",
        price:6000,
       id:2
    },
    {
        name:"iphone7",
        price:7000,
       id:3
    }


]
  return (
    <div>
      <p>Bai  tap 1</p>
      <p>Nội dung bài học</p>
      <p>Hiển thị fullName{fullName}</p>
      <p>{fullName} năm nay {age} tuổi</p>
      <p>Tên {student.age}</p>
      <p>Chuyển sang dạng Json để hiển thị</p>
      <p>{JSON.stringify(student)}</p>
      <p>Hiển thị (array)</p>
    <ul>
    {students.map((item,index,array)=>{
        return <li key={index}>{item}</li>
    })}
    {products.map(()=>{

    })}

    </ul>
    <table border={1}>
        <thead>
            <tr>
                <th>STT</th>
                <th>TEN</th>
                <th>GIA</th>
                <th>ID</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            {products.map((item,index,arr)=>{
                return <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.id}</td>
                </tr>
            })}
        </tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
   
    
    </div>
  )
}
