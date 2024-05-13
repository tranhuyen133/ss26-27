import React from 'react';

const FormatName = ({ user }) => {
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    return (
        <div>
            <h2>Nguyễn Văn Nam</h2>
            <p>{formatName(user)}</p>
        </div>
    );
}

export default FormatName;
