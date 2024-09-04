import React, {useState} from "react";
import {
  Container,
  SignupForm,
  OrDivider,
  SocialButtons,
  WelcomeTitle,
  InputField,
  SocialimageWrapper,
  StyledLink,
} from "../../styles/SignUp/index.jsx";

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.js";
import GoogleImg from "../../assests/FormComponent/Google.png";
import MicrosoftImg from "../../assests/FormComponent/Microsoft.png";

import CardComponent from "../CardComponent/index.jsx";
import FormComponent from "../FormComponent/index.jsx";
import {
  RegButton,
  Button,
  BtnWrap,
  InputWrapper,
} from "../../styles/Login/index.jsx";
import { PasswordIcon, PasswordIconWrap, PasswordWrapper } from "../../styles/PassSetup/index.jsx";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const showPassword = (e) => {
    e.stopPropagation();
    setShowPass(!showPass);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", { email: email, password: password });
      if (response.status === 200) {
        
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard")
      }
    }
    catch (e)
      {
        console.log(e);
        
      }
  }
  
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
        <SignupForm onSubmit={loginForm}>
          <WelcomeTitle>
            <h1>Sign In</h1>
            <p>
              Hello there! Welcome back, Sign In to continue where you left!.
            </p>
          </WelcomeTitle>
          <InputWrapper>
            <h1>Email</h1>
            <InputField
              type="email"
              placeholder="Enter your registered email id like abc1234@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
             <PasswordWrapper>
            <h1>Password</h1>
              <InputField
                type={showPass ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Start entering your new password here..."
                required
              />
              <PasswordIconWrap onClick={showPassword}>
                <PasswordIcon icon={showPass ? faEye : faEyeSlash} />
              </PasswordIconWrap>
            </PasswordWrapper>
            <BtnWrap>
              <Button type="submit">Sign In</Button>
             <StyledLink to="/forgetPass">
                <a href="#">Forget password?</a>
              </StyledLink>
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
          <StyledLink to="/">
            <RegButton>
              <p>
                Don’t have an account? <span>SignUp</span>
              </p>
            </RegButton>
          </StyledLink>
        </SignupForm>
      </FormComponent>
    </Container>
  );
}

export default SignUp;
