import React from "react";
import {
  RightSection,
  AsteroidImgWrap,
  SignUpLogo,
} from "../../styles/SignUp/index.jsx";

import AsteroidImg from "../../assests/FormComponent/Group 35.svg";
import logo from "../../assests/FormComponent/Scale-secure-logo.png";

const FormComponent = ({ children }) => {
  return (
    <RightSection>
      <SignUpLogo>
        <img src={logo} alt="Logo" />
      </SignUpLogo>
      <AsteroidImgWrap src={AsteroidImg} />
      {children}
    </RightSection>
  );
};

export default FormComponent;
