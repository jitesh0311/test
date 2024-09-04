import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Button,
  SignupForm,
  OrDivider,
  SocialButtons,
  WelcomeTitle,
  InputField,
  Note,
  BtnWrap,
  InputWrapper,
  SocialimageWrapper,
  StyledLink,
  RegButton,
} from "../../styles/SignUp/index.jsx";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.js";

import GoogleImg from "../../assests/FormComponent/Google.png";
import MicrosoftImg from "../../assests/FormComponent/Microsoft.png";

import CardComponent from "../CardComponent/index.jsx";
import FormComponent from "../FormComponent/index.jsx";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // State to store the email
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendOTP = (e) => {
    e.preventDefault();

    localStorage.setItem("email", JSON.stringify(email));

    const otp = generateOTP();

    const templateParams = {
      to_email: email,
      otp: otp,
    };

    // Send the OTP via EmailJS
    emailjs
      .send(
        "service_lkxt2ak",
        "template_c2r989j",
        templateParams,
        "pr_3awnTOpGFj3pU2"
      )
      .then(
        (response) => {
          console.log("OTP sent successfully!", response.status, response.text);
          localStorage.setItem("otp", otp);
          navigate("/otp");
        },
        (error) => {
          console.error("Failed to send OTP:", error);
        }
      );
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // On successful login, redirect to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <Container>
      <CardComponent />
      <FormComponent>
        <SignupForm onSubmit={sendOTP}>
          <WelcomeTitle>
            <h1>Sign Up</h1>
            <p>Hello there! Looks like you are new here, Sign Up now.</p>
          </WelcomeTitle>
          <InputWrapper>
            <h1>Email</h1>
            <InputField
              type="email"
              value={email} // Bind state to input
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              placeholder="Enter your email like abc1234@gmail.com"
              required
            />
            <BtnWrap>
              <Button type="submit">Generate OTP</Button>
              {/* Use the submit button to trigger the form submission */}
            </BtnWrap>
          </InputWrapper>
          <OrDivider>OR</OrDivider>
          <SocialButtons>
            <SocialimageWrapper onClick={handleGoogleSignIn}>
              <img src={GoogleImg} alt="GoogleImg" />
            </SocialimageWrapper>
            <SocialimageWrapper>
              <img src={MicrosoftImg} alt="MicroImg" />
            </SocialimageWrapper>
          </SocialButtons>
          <Note>
            <p>
              <span>Note : </span> Signing up via Google saves your time ~20
              seconds
            </p>
          </Note>
          <StyledLink to="/login">
            <RegButton>
              <p>
                Already have an account? <span>Login</span>
              </p>
            </RegButton>
          </StyledLink>
        </SignupForm>
      </FormComponent>
    </Container>
  );
}

export default SignUp;
