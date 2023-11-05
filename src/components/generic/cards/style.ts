import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 397.333px;
  padding: 32px 32px 32px 32px;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #fefefe;
  box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: Mulish, sans-serif;
  font-size: ${({ size }) => (size ? "14px" : "16px")};
  color: ${({ size }) => (size ? "#333" : "#151515")};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: stretch;
  justify-content: flex-start;
`;

const CountPage = styled.h1`
  border-radius: 8.5px;
  background: #efe6fd;
  display: flex;
  padding: 2px 12px;
  align-items: center;
  gap: 6px;
  color: #9654f4;
  text-align: center;
  font-family: Mulish, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Main = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
export { Container, Title, CountPage, Main, Box };
