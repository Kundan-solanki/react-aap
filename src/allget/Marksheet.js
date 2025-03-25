import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './Roleget.css'
import { Link } from 'react-router-dom';


export default function Marksheet() {
   const  [data , setData] = useState([])

   const  url = ( "http://localhost:8000/api/marksheet")

     useEffect(()=>{
        axios.get(url).then((resp)=>{
            setData(resp.data.data)
            console.log("This is a marksheet data", resp.data)
        }).catch((err)=>{
            console.log("This is eereo", err)

        })
    }, [])
 
    function marksheetdeletedata(id){
        axios.delete('http://localhost:8000/api/marksheet/' + id).then((resp)=>{
            console.log(resp)
        }).catch((err)=>{
            console.log('THis is err delete', err)
        })
    }
    
  return (
    <>
    <div style={{border : "2px solid black", margin : "30px", padding : '30px'}}>
    <div className='container'>
        <h1 className='h1'>All Student List</h1>
        <table>
            <thead className='thead-role'>
                <tr className='role-tr'>
                    <th className='role-th'>FirstName</th>
                    <th className='role-th'>LastName</th>
                    <th className='role-th'>RollNo</th>
                    <th className='role-th'>Maths</th>
                    <th className='role-th'>chemistry</th>
                    <th className='role-th'>Edite</th>
                    <th className='role-th'>Delete</th>
                </tr>
            </thead>
            <tbody className='role-tr'>
                {
                    data.map((item)=>{
                        console.log(item._id)

                        return(
                 <tr  className='role-tr' key={item._id}>
                    <td className='role-th'>{item.firstName}</td>
                    <td className='role-th'>{item.lastName}</td>
                    <td className='role-th'>{item.rollNo}</td>
                    <td className='role-th'>{item.maths}</td>
                    <td className='role-th'>{item.chemistry}</td>
                    <td className='role-th'>
                      <Link className='role-th' to={`/Addmarksheet/${item._id}`}>Edit</Link>  
                        </td>
                    <td className='role-th'>
                        <Link><button onClick={()=>marksheetdeletedata(item._id)}>DELETE</button></Link></td>
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
