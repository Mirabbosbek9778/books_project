import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${({ top }) => (top ? "123px" : "165px")};
  padding-top: ${({ bigtop }) => (bigtop ? "218px" : "123px")};
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Line = styled.div`
  width: 191px;
  height: 1px;
  background: #24272c;
`;

const Text = styled.h1`
  color: #24272c;
  text-align: center;
  font-family: Mulish, sans-serif;
  font-style: normal;
  line-height: normal;
  font-size: ${({ size }) => (size ? "36px" : "12px")};
  font-weight: ${({ size }) => (size ? "700" : "400")};
`;
const Main = styled.div`
  display: flex;
  width: 430px;
  height: 695px;
  padding: 48px 28px;
  flex-direction: column;
  gap: 36px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fefefe;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Inputs = styled.input`
  height: 47px;
  padding-left: 16px;
  gap: 16px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #ebebeb;
  background: #fefefe;
  box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
  color: #151515;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const InputsLabel = styled.label`
  color: #151515;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
const Diveder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DivederItem = styled.div`
  text-align: center;
  cursor: pointer;
  font-family: Mulish, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ colur }) => (colur ? "#6200EE" : "#333")};
  gap: 5px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #6200ee;
  color: #fefefe;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 10px 24px 10px 24px;
  border: none;
  cursor: pointer;
  width: 100%;
`;
export {
  Button,
  Container,
  Wrapper,
  Box,
  Line,
  Text,
  Main,
  Content,
  Forms,
  FormsItems,
  Inputs,
  Diveder,
  DivederItem,
  InputsLabel,
};
