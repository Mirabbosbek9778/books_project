import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 100px 12px 100px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  cursor: pointer;
`;

const Text = styled.h1`
  display: flex;
  gap: 5px;
  font-family: Mulish, sans-serif;
  color: ${({ colur }) => (colur ? "#6200ee" : "#FFF")};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.576px;
  font-family: Mulish, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.576px;
`;

const TextItem = styled.h1`
  display: flex;
  width: 264px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: #fefefe;
  font-family: Mulish, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  opacity: 0.64;
`;
const Image = styled.img`
  width: ${({ size }) => (size ? "36px" : "24px")};
  height: ${({ size }) => (size ? "36px" : "24px")};
  flex-shrink: 0;
  border-radius: 50%;
`;
export { Container, Box, Text, Image, TextItem };
