import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Addmarksheet() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setlastName] = useState('')
    const [rollNo , setRollNo] = useState('')
    const [maths , setMaths] = useState('')
    const [chemistry , setChemistry] = useState('')


  let id = useParams()?.id
  console.log(id , "THis is a id")

    function handalsubmit(e){
      e.preventDefault()
      axios.post("http://localhost:8000/api/marksheet",{firstName , lastName, rollNo, maths , chemistry}).then((req , resp)=>{
        console.log(resp)
      }).catch((err)=>{
        console.log(err)
      })
    }

 
    function editdata(){
      axios.put("http://localhost:8000/api/marksheet/" +id ,{firstName: firstName , lastName: lastName, rollNo: rollNo, maths : maths , chemistry:chemistry}).then((resp)=>{
        console.log(resp.data)
      }).catch((err)=>{
        console.log('edite marksheet data', err)
      })
    }

    function editemarksheetone(){
      axios.get('http://localhost:8000/api/marksheet/' + id).then((resp)=>{
        console.log(resp.data)
        setFirstName(resp.data.firstName)
        setlastName(resp.data.lastName)
        setRollNo(resp.data.rollNo)
        setMaths(resp.data.maths)
        setChemistry(resp.data.chemistry)
      }).catch((err)=>{
        console.log(err)
      })
    }
    
    useEffect(()=>{
      if(id){
        editemarksheetone("/marksheet")
      }
    }, [id])
  return (
    <div>

<div id="container">
        <h1 id="title">User Form</h1>

        <p id="description"><em>Thank you for taking the time to answer these questions about you</em></p>

        <form id="survey-form">
          <label id="name-label">FirstName</label>
          <input id="name" type="text" value={firstName} placeholder="Enter your firstname" onChange={(event) => setFirstName(event.target.value)} />

          <label id="email-label" >LastName</label>
          <input id="email" type="text"  value={lastName} placeholder="Enter your lastName" onChange={(event) => setlastName(event.target.value)} />

          <label id="number-label">RollNO</label>
          <input id="number" type="number"  value={rollNo} placeholder="role Id" onChange={(event) => setRollNo(event.target.value)} />

          <label id="number-label">Maths</label>
          <input id="number" type="number" value={maths} placeholder="number" onChange={(event) => setMaths(event.target.value)} />


          <label id="number-label">chemistry</label>
          <input id="number" type="number" placeholder="number" value={chemistry} onChange={(event) => setChemistry(event.target.value)} />

          <button id='submit' onClick={(e) => handalsubmit(e)} >Submit</button>
          <button id='submit' onClick={() => editdata()}>Edit</button>



        </form>
      </div>
    </div>
  )
}
