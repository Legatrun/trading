import { Navigate, Route, Routes } from 'react-router-dom';
import { Empezar, ForgetPassword, Historia, Home, Inicio, LoginPage, Mision, Referidos, RegisterPage, Vision } from '../pages';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="empezar" element={<Empezar />} />

      <Route path="forgetPassword" element={<ForgetPassword />} />

      <Route path="historia" element={<Historia />} />
      <Route path="home" element={<Home />} />
      <Route path="inicio" element={<Inicio />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="mapa" element={<Referidos />} />
      <Route path="mision" element={<Mision />} />
      <Route path="register/:id" element={<RegisterPage />} />
      <Route path="vision" element={<Vision />} />

      <Route path='/*' element={<Navigate to="/auth/home" />} />
    </Routes>
  )
}
