import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users")
      .then(response => {
        console.log(response.data);
        setUsers(response.data.reverse());
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDelete = (id) => {
    // Confirm deletion before proceeding
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) {
      return; // If user cancels deletion, exit the function
    }

    // Make DELETE request to the backend to delete the user
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(response => {
        console.log(response.data);
        // Filter out the deleted user from the users array
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error(`Error deleting user with ID ${id}:`, error);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {/* Link for View action */}
                <Link to={`user/view/${user.id}`} className='bg-green-400 p-2 rounded-md m-1'>
                  View
                </Link>

                {/* Link for Edit action */}
                <Link to={`user/edit/${user.id}`} className='bg-blue-400 p-2 rounded-md m-1'>
                  Edit
                </Link>

                {/* Button for Delete action */}
                <button className='bg-red-400 p-2 rounded-md m-1' onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
