import { Box } from "../signUp/style";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const Google = () => {
  const responseGoogle = (response: unknown) => {
    console.log(response);
  };
  const responseFacebook = (response: unknown) => {
    console.log(response);
  };
  return (
    <Box>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        style={{
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "70px",
          fontFamily: "Mulish,sans-serif",
          border: "1px solid #151515",
          background: "#fff",
          color: "#151515",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "normal",
          borderRadius: "4px",
        }}
      />
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        textButton="Continue with Facebook"
        buttonStyle={{
          width: "100%",
          height: "44px",
          display: "flex",
          alignItems: "center",
          fontFamily: "Mulish,sans-serif",
          border: "1px solid #151515",
          background: "#fff",
          color: "#151515",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "normal",
          borderRadius: "4px",
        }}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </Box>
  );
};

export default Google;
