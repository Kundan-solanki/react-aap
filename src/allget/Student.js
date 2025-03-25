import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Addstudent.css'
import { Link } from 'react-router-dom'
export default function Student() {
    const [data , setData] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:8000/api/students').then((resp)=>{
            setData(resp.data.data)
            console.log(resp.data.data)
        }).catch((err)=>{
            console.log(err , "this is error")
        })
    },[])

    function deletedatastudent(id){
        axios.delete("http://localhost:8000/api/students/" + id)
        .then((resp)=>{
            console.log(resp)
        }).catch((err)=>{
            console.log("delete dats student", err)
        })
        
    }
  return (
    <>
      <div style={{border : "2px solid black", margin : "30px", padding : '30px'}}>

    <div className='container'>
        <h1 className='h1'>School Listing</h1>
        <table>
            <thead className='thead-role'>
                <tr>
                    <th className='role-th'>FirstName</th>
                    <th className='role-th'>LastName</th>
                    <th className='role-th'>Emailid</th>
                    <th className='role-th'>Password</th>
                    <th className='role-th'>MobileNO</th>
                    <th className='role-th'>Delete</th>
                    <th className='role-th'>Edite</th>
                </tr>
            </thead>
            <tbody className='role-tr'>
                   {
                    data.map((item)=>{
                        return (
                            
                            <tr className='role-tr' key={item._id}>
                                <td className='role-th'>{item.firstName}</td>
                                <td className='role-th'>{item.lastName}</td>
                                <td className='role-th'>{item.emailId}</td>
                                <td className='role-th'>{item.password}</td>
                                <td className='role-th'>{item.mobileNo}</td>
                                <td>
                                    <Link className='role-th' to={`/addstudent/${item._id}`}>Edite</Link>
                                    </td>
                                <td className='role-th'>
                                    <Link><button onClick={()=>deletedatastudent(item._id)}>Delete</button></Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
   </div>
    </>
  )
}
