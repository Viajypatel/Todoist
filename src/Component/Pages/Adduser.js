import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
const Adduser = () => {
    const[data,setData]=useState({name:"",username:"",email:""});
    const [redirect, setRedirect] = useState(false);
    const changehand =(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
  const Adduser12 =(e)=>{
            e.preventDefault();
            axios.post("http://localhost:3001/users",data)
            .then((Response)=>{
                console.log(Response);
              setRedirect(true);

            }).catch((error)=>{
                console.log("kdkdkd",error)
            })
  }
  return (
    <div>
      <h1  className='text-center bg-red-600 font-serif text-3xl'>Add user</h1>
      <div className='flex justify-center items-center mt-5'>
<form className="border border-gray-300 p-4 rounded-md ">
  <div className="mb-4">
    <label htmlFor="name" className="block mb-1">Name:</label>
    <input type="text" value={data.name} id="name" name="name" onChange={(e)=>{changehand(e)}} className="border border-gray-300 rounded-md p-1" placeholder="Enter name" />
  </div>
  <div className="mb-4">
    <label htmlFor="username" className="block mb-1">Username:</label>
    <input type="text" value={data.username} id="username" name="username" onChange={(e)=>{changehand(e)}} className="border border-gray-300 rounded-md p-1" placeholder="Enter username" />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block mb-1">Email:</label>
    <input type="email" value={data.email} id="email" name="email" onChange={(e)=>{changehand(e)}} className="border border-gray-300 rounded-md p-1" placeholder="Enter email" />
  </div>
  <button onClick={(e)=>Adduser12(e)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">AddUser</button>
</form>
</div>
{redirect && <Navigate to='/' replace />}
    </div>
  )
}

export default Adduser
