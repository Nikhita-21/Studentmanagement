import {NavLink, Route, Routes} from 'react-router-dom'
import Dasboard from './Dasboard'
import Courses from './Courses'
import Student from './Student'
import Grades from './Grades'
import Form from './Form'
import Pagenotfound from './Pagenotfound'
import S1201 from './S1201'
import S1202 from './S1202'
import Default from './Default'
import './App.css'
function App() {
  return (
    <>
     <div style={{backgroundColor:'black',height:30,padding:20,fontSize:30}}>
        <NavLink  to='/' className='links'>Dashboard</NavLink>
        <NavLink  to='student' className='links'>Student</NavLink>
        <NavLink  to='course' className='links' >Courses</NavLink>
        <NavLink  to='grades' className='links'>Grades</NavLink>
        <NavLink  to='form'  className='links'><button>Login</button></NavLink>
    </div>
    <div>
        <Routes>
            <Route path='/' element={<Dasboard/>}/>
            <Route path='student' element={<Student/>}>
                <Route path='1201' element={<S1201/>}/>
                <Route path='1202' element={<S1202/>}/>
                <Route path=':id' element={<Default/>}/>
                 </Route>
            <Route path='course' element={<Courses/>}/>
            <Route path='grades' element={<Grades/>}/>
            <Route path='form' element={<Form/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
            {/* <Route path='student/1201' element={<S1201/>}/> */}
        </Routes>
    </div>
    
    </>
   
    
  );
}

export default App;
