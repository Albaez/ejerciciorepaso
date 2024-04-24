import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetallesComponent from './componenteScreen/DetallesComponent';
import ListadoComponent from './componenteScreen/ListadoComponent';
import Navbar from './componentes/Navbar';

const user = {
  name: 'Alba',
  lastName: 'Zuniga',
  photo: 'https://example.com/user.jpg'
};

function App() {
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route exact path="/" element={<ListadoComponent />} />
        <Route path="/detail/:itemId" element={<DetallesComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;