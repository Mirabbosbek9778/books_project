import Cards from "../../components/generic/cards/Cards";
import Filter from "../../components/generic/filter/Filter";
import Header from "../../components/header/Header";
import { dataCards } from "../../mock/dataCard";
import { Container, Content, Wrapper } from "../../assets/styleHome";
// import { useState, useEffect } from "react";

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://0001.uz/books")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);
  // console.log(data);

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
