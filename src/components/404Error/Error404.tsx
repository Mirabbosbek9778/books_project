import { Erorring } from "../../assets/all/AllStyle";
import { Button, Container, Wrapper } from "../signUp/style";
import { Box, Diveder } from "./style";
import { Link } from "react-router-dom";

const Error404 = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <Wrapper bigtop="true">
      <Container>
        <Diveder>
          <img src={Erorring} />
          <Box>
            <Button>
              <Link to="/home">Go Home Page</Link>
            </Button>
            <Button onClick={reloadPage}>Reload Page</Button>
          </Box>
        </Diveder>
      </Container>
    </Wrapper>
  );
};

export default Error404;
