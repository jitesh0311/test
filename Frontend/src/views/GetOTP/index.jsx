import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Container,
  Button,
  SignupForm,
  OrDivider,
  SocialButtons,
  WelcomeTitle,
  Note,
  BtnWrap,
  InputWrapper,
  SocialimageWrapper,
  StyledLink,
  RegButton,
} from "../../styles/SignUp/index.jsx";
import GoogleImg from "../../assests/FormComponent/Google.png";
import MicrosoftImg from "../../assests/FormComponent/Microsoft.png";
import {
  BackToSignupWrap,
  ErrorMess,
  HeadingWrap,
  OTPContainer,
  OTPInput,
  OTPInputs,
  Separator,
} from "../../styles/GetOTP/index.jsx";
import backToSignup from "../../assests/GetOtp/icon_back.svg";
import CardComponent from "../../components/CardComponent/index.jsx";
import FormComponent from "../../components/FormComponent/index.jsx";
import { useNavigate } from "react-router-dom"; // or useNavigate if using React Router v6
import { sendOTP } from "../../components/SignUp/index.jsx"; 

const GetOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const btnRef = useRef(null);
  const navigate = useNavigate(); // or useNavigate if using React Router v6

  // Check if OTP is complete
  const isOTPComplete = useMemo(
    () => otp.every((digit) => digit !== ""),
    [otp]
  );

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.disabled = !isOTPComplete;
    }
  }, [isOTPComplete]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = value;
        return newOtp;
      });
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");
    const savedOtp = localStorage.getItem("otp"); // Retrieve the saved OTP

    if (enteredOtp === savedOtp) {
      alert("OTP verified successfully! Redirecting to password setup.");
      navigate("/Setup"); // Redirect to the password setup page
    } else {
      setError(true);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text");
    const digits = pasteData.split("").filter((char) => /^\d$/.test(char));

    setOtp((prev) => {
      const newOtp = [...prev];
      digits.forEach((digit, index) => {
        if (index < newOtp.length) {
          newOtp[index] = digit;
        }
      });
      return newOtp;
    });

    if (digits.length > 0) {
      const nextIndex = Math.min(digits.length, otp.length - 1);
      document.getElementById(`otp-${nextIndex}`).focus();
    }
  };

    // const handleResend = () => {
    //   const storedEmail = localStorage.getItem("email");
    //   if (storedEmail) {
    //     sendOTP({ preventDefault: () => {} }, storedEmail)
    //       .then(() => {
    //         alert("OTP resent successfully!");
    //       })
    //       .catch((error) => {
    //         console.error("Failed to resend OTP:", error);
    //       });
    //   }
  // };
  
  const backToSignupPage = () => {
    navigate("/");
  }
  return (
    <Container>
      <CardComponent />
      <FormComponent>
        <SignupForm onSubmit={handleSubmit}>
          <HeadingWrap>
            <BackToSignupWrap onClick={backToSignupPage}>
              <img src={backToSignup} alt="back" />
            </BackToSignupWrap>
            <WelcomeTitle>
              <h1>Enter OTP</h1>
              <p>Fill in the 6-digit OTP you received in your email</p>
            </WelcomeTitle>
          </HeadingWrap>
          <InputWrapper>
            <h1>OTP</h1>
            <OTPContainer>
              <OTPInputs>
                {otp.map((value, index) => (
                  <React.Fragment key={index}>
                    <OTPInput
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                      onPaste={handlePaste}
                      error={error}
                    />
                    {index < otp.length - 1 && <Separator error={error} />}
                  </React.Fragment>
                ))}
              </OTPInputs>
            </OTPContainer>
            {error && (
              <ErrorMess>
                Invalid OTP entered. Please re-check your email and enter!
              </ErrorMess>
            )}
            <BtnWrap>
              <Button type="submit" disabled ref={btnRef}>
                Confirm & Signup
              </Button>
              <p>
                Didn’t receive OTP? <span>Resend Now</span>
              </p>
            </BtnWrap>
          </InputWrapper>
          <OrDivider>OR</OrDivider>
          <SocialButtons>
            <SocialimageWrapper>
              <img src={GoogleImg} alt="GoogleImg" />
            </SocialimageWrapper>
            <SocialimageWrapper>
              <img src={MicrosoftImg} alt="MicroImg" />
            </SocialimageWrapper>
          </SocialButtons>
          <Note>
            <p>
              <span>Note: </span> Signing up via Google saves your time ~20
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
};

export default GetOTP;
