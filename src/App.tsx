import { BrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import { Container } from "./assets/style";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Root />
      </Container>
    </BrowserRouter>
  );
};

export default App;
