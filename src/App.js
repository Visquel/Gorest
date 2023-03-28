import React, { useState, useEffect }  from 'react';
import './App.css';

function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
        .then(res => res.json())
        .then(
            (data) => {
              setInfo(data);
            },
            (error) => {
              console.err(error);
            }
        )
  }, [])

  return (
    <div>
      <table className="styled-table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
        {info.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.status}</td>
        </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
