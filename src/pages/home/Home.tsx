import Cards from "../../components/generic/cards/Cards";
import Filter from "../../components/generic/filter/Filter";
import Header from "../../components/header/Header";
import { dataCards } from "../../mock/dataCard";
import { Container, Content, Wrapper } from "../../assets/styleHome";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Filter />
        <Content>
          {dataCards?.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
