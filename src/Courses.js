import React from 'react';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
    const navi=useNavigate()
    return (
        <div>
            <h1>
            course page </h1><br/>
            <button onClick={()=>navi(-1)}>Goback</button>
        </div>
    );
};

export default Courses;