import React from 'react';

const UserInfo = () => {

    const user = {
        firstName: 'Nguyễn Văn A',
        sex: 'Nam',
        Date: '06/03/2024',
        email: 'nva@gmail.com',
        address: 'Thanh Xuân ,Hà Nội'
       
    };

    return (
        <div>
            <h2>User Information</h2>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
           
        </div>
    );
}

export default UserInfo;
