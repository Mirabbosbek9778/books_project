import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 36px 100px 12px 100px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Text = styled.h1`
  display: flex;
  gap: 8px;
  color: ${({ color }) => (color ? "#6200EE" : " #fefefe")};
  font-family: Mulish, sans-serif;
  font-size: ${({ size }) => (size ? "20px" : "36px")};
  font-weight: ${({ size }) => (size ? "400" : "700")};
  align-self: ${({ size }) => (size ? "stretch" : "")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;

const Input = styled.input`
  display: flex;
  height: 47px;
  padding: 14px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #ebebeb;
  background: #fefefe;
  color: #151515;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 320px;
`;

const Button = styled.button`
  color: #fefefe;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  padding: 10px 24px;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  background: #6200ee;
  margin-bottom: 29px;
`;

export { Container, Main, Text, Box, Input, Button };
