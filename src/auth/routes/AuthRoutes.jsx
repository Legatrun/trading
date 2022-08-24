import { Navigate, Route, Routes } from 'react-router-dom';
import { Empezar, Historia, Home, Inicio, LoginPage, Mapa, Mision, RegisterPage, Servicios, Vision } from '../pages';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="empezar" element={<Empezar />} />
      <Route path="historia" element={<Historia />} />
      <Route path="home" element={<Home />} />
      <Route path="inicio" element={<Inicio />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="mapa" element={<Mapa />} />
      <Route path="mision" element={<Mision />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="servicios" element={<Servicios />} />
      <Route path="vision" element={<Vision />} />

      <Route path='/*' element={<Navigate to="/auth/home" />} />
    </Routes>
  )
}
