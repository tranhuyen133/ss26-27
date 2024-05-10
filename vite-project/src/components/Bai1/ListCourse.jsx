import React from 'react';

const ListCourse = () => {
    const courses = [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript " },
      
    ];

    return (
        <div>
            <h1>Danh sách khóa học</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListCourse;
