import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

const Edituser = () => {
  const [data, setData] = useState({ name: '', username: '', email: '' });
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  const changeHand = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data)
      .then((response) => {
        console.log(response);
        // Set redirect to true after successful update
        setRedirect(true);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  return (
    <div>
      <h1 className='text-center bg-red-600'>Edit user: {data.name}</h1>
      <div className='flex justify-center items-center mt-5'>
        <form className='border border-gray-300 p-4 rounded-md'>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-1'>Name:</label>
            <input type='text' value={data.name} id='name' name='name' onChange={changeHand} className='border border-gray-300 rounded-md p-1' placeholder='Enter name' />
          </div>
          <div className='mb-4'>
            <label htmlFor='username' className='block mb-1'>Username:</label>
            <input type='text' value={data.username} id='username' name='username' onChange={changeHand} className='border border-gray-300 rounded-md p-1' placeholder='Enter username' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-1'>Email:</label>
            <input type='email' value={data.email} id='email' name='email' onChange={changeHand} className='border border-gray-300 rounded-md p-1' placeholder='Enter email' />
          </div>
          <button onClick={updateUser} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Update User</button>
        </form>
      </div>

      {/* Redirect to home page after successful update */}
      {redirect && <Navigate to='/' replace />}
    </div>
  );
};

export default Edituser;
