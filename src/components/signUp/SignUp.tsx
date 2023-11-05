import { Link } from "react-router-dom";
import Google from "../google/Google";
import {
  Button,
  Container,
  Content,
  Diveder,
  DivederItem,
  Forms,
  FormsItems,
  Inputs,
  InputsLabel,
  Line,
  Main,
  Text,
  Wrapper,
} from "./style";

const SignUp = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <Text size="true">Sign up</Text>
          <Google />
          <Content>
            <Line></Line>
            <Text>OR</Text>
            <Line></Line>
          </Content>
          <Forms>
            <FormsItems>
              <InputsLabel>Your name</InputsLabel>
              <Inputs type="text" placeholder="Enter your name" />
            </FormsItems>
            <FormsItems>
              <InputsLabel>Your email</InputsLabel>
              <Inputs type="email" placeholder="Enter your email" />
            </FormsItems>
            <FormsItems>
              <InputsLabel>Your username</InputsLabel>
              <Inputs type="text" placeholder="Enter your username" />
            </FormsItems>
          </Forms>
          <Diveder>
            <Button>Sign Up</Button>
            <DivederItem>
              Already signed up?
              <Link to="/signIn">
                <DivederItem colur="true">Go to sign in.</DivederItem>
              </Link>
            </DivederItem>
          </Diveder>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
