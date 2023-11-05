import { Cloud, Notifcation, Profile, Search } from "../../assets/all/AllStyle";
import { Box, Container, Image, Text, TextItem } from "./style";

const Header = () => {
  return (
    <Container>
      <Box>
        <Image sizes="true" src={Cloud} />
        <Text>
          Books <Text color="true">List</Text>
        </Text>
        <Box>
          <Image src={Search} />
          <TextItem>Search for any training you want </TextItem>
        </Box>
      </Box>
      <Box>
        <Image src={Notifcation} />
        <Image src={Profile} />
      </Box>
    </Container>
  );
};

export default Header;
