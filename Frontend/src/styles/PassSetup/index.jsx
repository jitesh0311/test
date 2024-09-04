import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    color: #868686;
  }
`;

export const Button = styled.button`
  padding: 10px 55px;
  background-color: #9747ff;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #666;

  &:focus {
    outline: none;
  }
`;

export const PasswordRequirements = styled.div`
  margin: 15px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const PasswordIconWrap = styled.span`
  position: absolute;
  right: 19px;
  top: 60px;
`;

export const PasswordIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const RequirementItem = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-block: 5px;
  gap: 10px;
  color: #868686;

  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: -13px;
    bottom: 50%;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${(props) => (props.isValid ? "green" : "transparent")} 0%,
      ${(props) => (props.isValid ? "transparent" : "transparent")} 100%
    );
    background-size: 200% 200%;  
    background-position: 0% 0%;
    transition: background-position 0.7s ease-in-out;
    z-index: 1;
  }

  &:hover::before {
    background-position: 0% 100%;
  }

  &:first-of-type::before {
    display: none;
  }

  & .icon {
    color: ${(props) => (props.isValid ? "green" : "lightgray")};
    font-size: 20px;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }
`;

export const CheckIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faCheckCircle,
}))``;
