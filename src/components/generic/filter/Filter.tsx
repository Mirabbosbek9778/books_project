import { Pluse } from "../../../assets/all/AllStyle";
import { Box, Button, Container, Input, Main, Text } from "./style";

const Filter = () => {
  return (
    <Container>
      <Main>
        <Text>
          You’ve got <Text color="true">7 book</Text>
        </Text>
        <Text size="true">Your task today</Text>
      </Main>
      <Box>
        <Input type="text" placeholder="Enter your name" />
        <Button>
          <img src={Pluse} />
          Create a book
        </Button>
      </Box>
    </Container>
  );
};

export default Filter;
