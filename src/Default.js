import React from 'react';
import { useParams } from 'react-router-dom';
const Default = () => {
    const student=useParams()
    return (
        <div>
            <h1>This is the page of {student.id}</h1>
        </div>
    );
};

export default Default;