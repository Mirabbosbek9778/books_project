import { Box, Container, CountPage, Main, Title } from "./style";

const Cards = ({ title, description, date, count }) => {
  return (
    <Container>
      <Main>
        <Title>{title}</Title>
        <Title size>{description}</Title>
      </Main>
      <Box>
        <Title size>{date}</Title>
        <CountPage>{count}</CountPage>
      </Box>
    </Container>
  );
};

export default Cards;
