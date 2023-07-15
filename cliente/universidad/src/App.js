import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registrarse from './pages/Registrarse/Registrarse';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import EstudianteDashboard from './pages/EstudiantesDashboard/EstudiantesDashboard';
import PageNotFound from './pages/NotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/EstudianteDashboard" element={<EstudianteDashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
