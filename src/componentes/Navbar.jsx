import React, { useEffect, useState } from 'react';

function Navbar({ user }) {
  const [userPhoto, setUserPhoto] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(data => {
        setUserPhoto(data.data.avatar);
        setUserName(data.data.first_name);
        setUserLastName(data.data.last_name);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">API </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Listado
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Detalle</a>
            </li>
          </ul>
          
        </div>
        <img src={userPhoto} alt="User" />
          <span>{userName} {userLastName}</span>
      </div>
    </nav>
  );
}

export default Navbar;