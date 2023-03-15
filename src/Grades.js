import React from 'react';
import { useNavigate } from 'react-router-dom';
const Grades = () => {
    const navi=useNavigate()
    return (
        <div>
            <h1>this is grads page</h1> <br/>
            <button onClick={()=>navi(-1)}>Goback</button>
        </div>
    );
};

export default Grades;