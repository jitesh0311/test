import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Import EmailJS
import { useNavigate } from "react-router-dom";

import {
  Container,
  Button,
  SignupForm,
  WelcomeTitle,
  InputField,
  BtnWrap,
  InputWrapper,
  AsteroidImgWrap,
  SignUpLogo,
} from "../../styles/SignUp/index.jsx";

import CardComponent from "../../components/CardComponent/index.jsx";
import { BackToSignupWrap, HeadingWrap } from "../../styles/GetOTP/index.jsx";
import backToSignup from "../../assests/GetOtp/icon_back.svg";
import AsteroidImg from "../../assests/FormComponent/Group 35.svg";
import logo from "../../assests/FormComponent/Scale-secure-logo.png";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Generate a unique token for password reset
  const generateResetToken = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const resetToken = generateResetToken();

    const templateParams = {
      to_email: email,
      reset_link: `${window.location.origin}/reset-password?token=${resetToken}`, // Include the reset token in the link
    };

    // Send the reset link via EmailJS
    emailjs
      .send(
        "service_lkxt2ak",
        "template_c2r989j",
        templateParams,
        "pr_3awnTOpGFj3pU2"
      )
      .then(
        (response) => {
          console.log(
            "Reset link sent successfully!",
            response.status,
            response.text
          );
          localStorage.setItem("reset_token", resetToken); // Store the token temporarily
          navigate("/reset"); // Navigate to the reset password page
        },
        (error) => {
          console.error("Failed to send reset link:", error);
        }
      );
  };

  const RightSection = styled.div`
    flex: 1;
    background: #11141f;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 25px 0px;
    gap: 30px;
  `;

  const backToSigninPage = () => {
    navigate("/login");
  }

  return (
    <Container>
      <CardComponent />
      <RightSection>
        <SignUpLogo>
          <img src={logo} alt="Logo" />
        </SignUpLogo>
        <AsteroidImgWrap src={AsteroidImg} />
        <SignupForm onSubmit={handleSubmit}>
          <HeadingWrap>
            <BackToSignupWrap onClick={backToSigninPage}> 
              <img src={backToSignup} alt="back" />
            </BackToSignupWrap>
            <WelcomeTitle>
              <h1>Forgot Password</h1>
              <p>Before resetting, think of all possible passwords!</p>
            </WelcomeTitle>
          </HeadingWrap>
          <InputWrapper>
            <h1>Email</h1>
            <InputField
              type="email"
              placeholder="Enter your email like abc1234@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value = {email}
            />
            <BtnWrap>
              <Button type="submit">Send Reset Link</Button>
            </BtnWrap>
          </InputWrapper>
        </SignupForm>
      </RightSection>
    </Container>
  );
}

export default ForgotPass;
