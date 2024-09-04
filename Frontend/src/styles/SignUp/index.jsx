import styled from "styled-components";
import { Link } from "react-router-dom";
import Back from "../../assests/CardComponent/leftbg.png"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Back});
  background-size: cover;
  background-repeat: no-repeat; 
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: left;
  width: 100%;
  max-width: 300px;

  &:nth-of-type(1) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    transform: translateX(20px) translateY(12px) rotate(-10deg);
  }

  &:nth-of-type(2) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    transform: translateX(20px) rotate(5deg);
  }

  &:nth-of-type(3) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    transform: translateX(20px) translateY(-15px) rotate(-10deg);
  }
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${(props) => props.bgColor || "#24ac54"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ImageWrapper = styled.img`
   width: 30px;

`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const RightSection = styled.div`
  flex: 1;
  background: #11141f;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px 0px;
  gap: 30px;
`;

export const SignUpLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
`;

export const AsteroidImgWrap = styled.img`
  position: absolute;
  height: 593px;
  top: 0;
  right: 0;
  z-index: 0;
`;

export const SignupForm = styled.form`
  background: rgba(30, 34, 48, 0.8);
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  z-index: 99;
`;

export const WelcomeTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 24px;
    color: white;
  }

  p {
    font-size: 14px;
    color: #d9d9d9;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 18px;
    color: #d9d9d9;
  }

  h1::after {
    content: "*";
    color: red;
    font-size: inherit;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #34416d;
  background-color: #11141f;
  color: white;
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    color: #868686;

    span {
      color: #9747ff;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  background-color: #5a3497;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const OrDivider = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #868686;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 28px;
    min-width: 217px;
    top: 12px;
    height: 1px;
    background-color: #363636;
  }

  &::after {
    content: "";
    position: absolute;
    left: 28px;
    top: 12px;
    min-width: 217px;
    height: 1px;
    background-color: #363636;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const SocialimageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #11141f;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25px;
  }
`;

export const Note = styled.div`
  border: 1px solid #2b3043;
  background-color: #2b3043;
  border-radius: 5px;
  padding: 7px 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #9747ff;
  }

  p {
    font-size: 13px;
    color: #bbb;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 10px;
`;

export const RegButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #9747ff;
  }

  p {
    font-size: 13px;
    color: #bbb;
    text-align: center;
    cursor: pointer;
  }
`;
