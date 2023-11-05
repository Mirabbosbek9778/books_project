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
} from "../signUp/style";

const SignIn = () => {
  return (
    <Wrapper top>
      <Container>
        <Main>
          <Text size="true">Sign In</Text>
          <Google />
          <Content>
            <Line></Line>
            <Text>OR</Text>
            <Line></Line>
          </Content>
          <Forms>
            <FormsItems>
              <InputsLabel>Your username</InputsLabel>
              <Inputs type="text" placeholder="Enter your username" />
            </FormsItems>
            <FormsItems>
              <InputsLabel>Your email</InputsLabel>
              <Inputs type="email" placeholder="Enter your email" />
            </FormsItems>
            <FormsItems>
              <InputsLabel>Your username</InputsLabel>
              <Inputs type="text" placeholder="Enter your username" />
            </FormsItems>
            <FormsItems>
              <InputsLabel>Your password</InputsLabel>
              <Inputs type="password" placeholder="Enter your password" />
            </FormsItems>
          </Forms>
          <Diveder>
            <Button>Sign Up</Button>
            <DivederItem>
              Already signed up?
              <Link to="/">
                <DivederItem colur="true">Go to sign up.</DivederItem>
              </Link>
            </DivederItem>
          </Diveder>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
