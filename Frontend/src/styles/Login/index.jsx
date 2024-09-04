import styled from "styled-components";



export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 15px;
  position: relative;

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

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  a {
    color: #3b82f6;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  padding: 12px 60px;
  background-color: #3b82f6;
  opacity: 0.8;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const RegButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #3b82f6;
  }

  p {
    font-size: 15px;
    color: #d9d9d9;
    text-align: center;
    cursor: pointer;
  }
`;

