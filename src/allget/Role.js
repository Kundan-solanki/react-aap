
import React, { useEffect, useState } from 'react'
import './Roleget.css'
import {Link} from 'react-router-dom';

import axios from 'axios';
// const cors = require('cors')




export default function Role() {
  const [data, setData] = useState([]);

  // cors.use(cors());
  

//    ya wala .then or .catch method se kiya h
  useEffect(() => {
    axios.get('http://localhost:8000/api/role').then((response) => {
      setData(response.data.data);
      console.log("data this is cosole", response.data.data)
    }).catch((err) => {
      console.log(err, 'this is error')
    })

  }, []);

  //   yh bala try catcha se kiya ha
  // const fetchdata = async () =>{
  //   try{
  //     const resp = await axios.get('http://localhost:8000/api/role')
  //     setData(resp.data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }


  

//   }, []);
  



function roledataDeleted(id) {
  // Simple DELETE request with axios
  axios.delete('http://localhost:8000/api/role/'+id)
      .then((response) => {
       console.log(response)
      //  navigate('/role')

      }).catch((err)=>{
        console.log("THis is a err handaling", err)
      })
}



  return (
    <>
        {/* <span className='addrole-head'>Name :-</span>
  <input className='addrole-input' type='text' placeholder='Search' ></input>
  <br></br>
  <span  className='addrole-head'>Discription :-</span>
  <input className='addrole-input' type='text' placeholder='User Discription'></input>
  <br></br>
  <button className='addrole-edit'>submit</button>
  
  <br></br> */}
  <div className='container'>

<h1 className='h1'>Listing Page:-</h1>
        <table>
          <thead className='thead-role'>
            <tr className='role-tr'>
              <th className='role-th'>Name</th>
              <th className='role-th'>discription</th>
              <th className='role-th'>Edite</th>
              <th className='role-th'>Delete</th>

            </tr>
          </thead>
          <tbody className='role-tr'>
            {
              data.map((item) => {
                console.log(item, "this is all data")
                return (

                  <tr className='role-tr' key={item._id}>
                    <td className='role-th'>{item.name}</td>
                    <td className='role-th'>{item.discription}</td>
                    <td className='role-th'>
                      <Link className='role-th' to={`/addrole/${item._id}`}>Edite</Link>
                    </td>
                    <td className='role-th'>
                      <Link><button onClick={()=>roledataDeleted(item._id)}>Delte</button></Link></td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}
