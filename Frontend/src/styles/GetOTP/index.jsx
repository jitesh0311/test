import styled from "styled-components";

export const HeadingWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
`;

export const BackToSignupWrap = styled.div`
  cursor: pointer;
`;

export const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OTPInputs = styled.div`
  display: flex;
  gap: 12px;
`;

export const OTPInput = styled.input`
  width: 55px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  border: ${(props) =>
    props.error ? "1px solid #EF4444" : "1px solid #34416D;"};
  background-color: #11141f;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  position: relative;

  &:focus {
    border-color: #007bff;
  }
`;

export const Separator = styled.div`
  width: 14px; /* Thin separator */
  height: 2px; /* Match the height of OTPInput */
  background-color: ${(props) => (props.error ? "#EF4444" : "#34416D;")};
  position: relative;
  top: 50%;
`;

export const ErrorMess = styled.p`
  margin-top: -12px;
  color: #ef4444;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;
