import React from 'react'
import SignUp from '../../components/SignUp'
import PasswordSetup from '../../views/PassSetup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../../components/Login';
import GetOTP from '../../views/GetOTP';
import ForgotPass from '../../views/ForgetPass';
import ResetPass from '../../views/ResetPass';
import Dashboard from '../../views/Dashboard';

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Setup" element={<PasswordSetup />} />
        <Route path="/Reset" element={<ResetPass />} />
        <Route path="/otp" element={<GetOTP />} />
        <Route path="/forgetPass" element={<ForgotPass />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home