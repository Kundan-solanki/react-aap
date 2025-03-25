import React, { useEffect, useState } from 'react'
import './Roleaddstyle.css'
import axios from 'axios'

import { useParams , useNavigate} from 'react-router-dom'

export default function Addrole() {
  const [name , setName] = useState('')
  const [discription , setDiscription] = useState('')
  const { id } = useParams()
  // let id = useParams()?.id
  const navigate = useNavigate()


  


function registerUser(e) {
    e.preventDefault()
    axios.post('http://localhost:8000/api/role',{ 
      name,discription
    }).then((req , response)=>{
      console.log(response.data)
      
    }).catch(err=>{
      console.log('this is err handaling',err?.errorResponse?.errmsg)
      
    })
  }


//  imp err hnd( 'this is err handaling',err?.errorResponse?.errmsg)



  function update() {
    axios.put('http://localhost:8000/api/role/' + id, { name, discription }).then((response) => {
      console.log(response.data);
      navigate('/role')
     
    }).catch((err)=>{
      console.log("This is edite", err)
    })
  }

function editedataone(){
 axios.get('http://localhost:8000/api/role/' + id).then((resp)=>{
  console.log(resp.data)
  setName(resp.data.name)
  setDiscription(resp.data.discription)
  // navigate('/role')

 }).catch((err)=>{
  console.log(err)
 })
}

useEffect(()=>{
  if(id){
    editedataone('/role')
  }
},[id])


  return (
    <>

      <div className='addrole'>
        <label className='addrole.label'>
          <form className='addrole-form' onSubmit={id ?  update : registerUser}>
            <p className='addrole-head'>Name :-</p>
            <input className='addrole-input' type='text' placeholder='User Name' value={name} onChange={(event) => setName(event.target.value)}></input>
            <br></br>
            <p className='addrole-head'>Discription :-</p>
            <input className='addrole-input' type='text' placeholder='User Discription' value={discription} onChange={(event) => setDiscription(event.target.value)}></input>

            <br></br>

            <button className='addrole-edite' onClick={(e)=>registerUser(e)}>submit</button>
            <br></br>
            <br></br>
            <button className='addrole-edite' onClick={()=>update()}>Edite</button>
          </form>
        </label>
      </div>

    </>
  )
}
