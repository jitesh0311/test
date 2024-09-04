import { useState } from "react";
import {
  Container,
  SignupForm,
  WelcomeTitle,
  InputField,
} from "../../styles/SignUp/index.jsx";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import CardComponent from "../../components/CardComponent/index.jsx";
import FormComponent from "../../components/FormComponent/index.jsx";
import {
  BtnWrap,
  Button,
  InputWrapper,
  PasswordRequirements,
  RequirementItem,
  PasswordIcon,
  PasswordIconWrap,
  CheckIcon,
  PasswordWrapper,
} from "../../styles/PassSetup/index.jsx";


function PassSetup() {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const showPassword = (e) => {
    e.stopPropagation();
    setShowPass(!showPass);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkPasswordsMatch = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the checkPasswordsMatch function here
    if (checkPasswordsMatch()) {
      // If passwords match, proceed with form submission
      console.log("Form submitted successfully");
      // Here you can proceed with your form submission logic
    }
  };

  // Validation functions
  const isLengthValid = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <Container>
      <CardComponent />
      <FormComponent>
        <SignupForm onSubmit={handleSubmit}>
          <WelcomeTitle>
            <h1>Reset Password</h1>
            <p>This will take some effort, Relax and then get started!</p>
          </WelcomeTitle>
          <InputWrapper>
            <PasswordWrapper>
              <h1>Set-up your 8+ digits password</h1>
              <InputField
                type={showPass ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Start entering your new password here..."
                required
              />
              <PasswordIconWrap onClick={showPassword}>
                <PasswordIcon icon={showPass ? faEyeSlash : faEye} />
              </PasswordIconWrap>
            </PasswordWrapper>
            <PasswordWrapper>
              <h1>Confirm New Password</h1>
              <InputField
                type={showPass ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your new password..."
                required
              />
              <PasswordIconWrap onClick={showPassword}>
                <PasswordIcon icon={showPass ? faEyeSlash : faEye} />
              </PasswordIconWrap>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </PasswordWrapper>
            <PasswordRequirements>
              <ul>
                <RequirementItem isValid={isLengthValid}>
                  <CheckIcon className="icon" isValid={isLengthValid} />
                  Password must be at least 8 characters long
                </RequirementItem>
                <RequirementItem isValid={hasUpperCase && hasLowerCase}>
                  <CheckIcon
                    className="icon"
                    isValid={hasUpperCase && hasLowerCase}
                  />
                  Password must contain 1 Uppercase & 1 Lowercase letter
                </RequirementItem>
                <RequirementItem isValid={hasDigit}>
                  <CheckIcon className="icon" isValid={hasDigit} />
                  Password must contain at least one digit like 1,2,3,4,5,6,
                  etc.
                </RequirementItem>
                <RequirementItem isValid={hasSpecialChar}>
                  <CheckIcon className="icon" isValid={hasSpecialChar} />
                  Password must contain at least one special character like !,
                  @, #, $, etc.
                </RequirementItem>
              </ul>
            </PasswordRequirements>

            <BtnWrap>
              <Button
                type="submit"
                disabled={
                  !isLengthValid ||
                  !hasUpperCase ||
                  !hasLowerCase ||
                  !hasDigit ||
                  !hasSpecialChar
                }
              >
                Save & Sign In
              </Button>
            </BtnWrap>
          </InputWrapper>
        </SignupForm>
      </FormComponent>
    </Container>
  );
}

export default PassSetup;
