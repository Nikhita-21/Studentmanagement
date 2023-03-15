import React from 'react';
import {useForm} from 'react-hook-form'
const Form = () => {

    const {register,handleSubmit}=useForm()
    const onsubmit=data=>console.log(data)

    return (

            <form onSubmit={handleSubmit(onsubmit)} style={{margin:'15% 50% 0% 40%'}}>
                <div style={{display:'flex'}}><span style={{fontSize:25,margin:8}}>Username</span>
                <div><input type={'text'} {...register('Username',{required:true})} style={{height:30}}></input> </div></div>
               <div style={{display:'flex'}}><span style={{fontSize:25,margin:12}}>Password</span>
                <div><input type={'password'} {...register('Password',{required:true})} style={{height:30}}/></div></div>
                <div style={{margin:'5% 40% 3% 60%'}}><input type={'submit'} value='Login' style={{padding:8,color:'white',background:'green'}}/></div>
            </form>
    
    );
};

export default Form;