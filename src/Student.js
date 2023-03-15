import React from 'react';
import { useNavigate,Outlet, Link} from 'react-router-dom';
const Student = () => {
    const navi=useNavigate()
    return (
        <div>
            <h3>this is student page</h3>
            <div style={{display:'flex',padding:20,margin:20}}>
                    <div>
                    <Link to='1201' style={{textDecoration:'none'}}><h1>1201</h1></Link>
                    <Link to='1202' style={{textDecoration:'none'}}><h1>1202</h1></Link>
                    </div>
                    <div>
                    <Outlet/>
                    </div>

            </div>


            <button onClick={()=>navi(-1)}>Goback</button>
            
        </div>

    );
};

export default Student;