import { Routes as BrowserRoutes, Route } from "react-router-dom";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/signIn/SignIn";
import Error404 from "../components/404Error/Error404";
import Home from "../pages/home/Home";

const Root = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </BrowserRoutes>
  );
};

export default Root;
