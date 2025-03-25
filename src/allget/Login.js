import React, { useState } from 'react'
import './loginform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const navigator = useNavigate()

  function loginyouwork(event){
    event.preventDefault()
   axios.post("http://localhost:8000/api/user",{
    name , email , password,
   }).then((req , resp)=>{
    console.log(resp.data)
  
     }).catch(err=>{
      console.log("THis is loginpage", err)
     })

  }
  return (
    <>
    <div className='d-flex' style={{width : "100%" , margin : '0px 12px', border : "2px solid black", backgroundColor : '#cec7c7'}}>
    <div className='container' style={{ width : "40%", padding : '2%',marginLeft : "22%"}}>
      <form className='loginf-form'>
        <fieldset>
          <h1 className='login-legend'>Login page</h1>

          
            <p className='name-p'>Name</p>
            <input className='input-first' style={{backgroundColor : 'rgb(175 250 255)'}} type='text' placeholder='UserName' value={name} onChange={(event)=> setName(event.target.value)}></input>
            <br></br>
            <p className='name-p'>Email</p>
            <input className='input-first' style={{backgroundColor : 'rgb(175 250 255)'}} type='email' placeholder='email' value={email} onChange={(event)=>setEmail(event.target.value)}></input>
            <br></br>
             <p className='name-p'>Password</p>
            <input className='input-first' style={{backgroundColor : 'rgb(175 250 255)'}} type='password' placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
            <br></br>
            <p style={{ fontFamily: 'cursive'}}> Forgot <a href="">Password? Sign up</a></p>




            <button className='login-final' onClick={(event)=> loginyouwork(event)}>Login</button> <button className='login-final'>loginOut</button>
         
        </fieldset>
      </form>
    </div>
    <div className='' style={{ width : "40%", marginRight : "35%" , paddingTop : '3%'}}>
      <img src="https://s3.us-east-2.wasabisys.com/ai-image-editor-webapp/asset/photo-editor-landing-page.webp" alt="THis is a mobile img"></img>

    </div>
    </div>
    </>
  )
}
