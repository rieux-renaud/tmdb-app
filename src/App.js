import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import About from "./pages/About";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import {
  Authenticator,
  withAuthenticator,
  Button,
} from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coup-de-coeur" element={<UserList />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Authenticator>
  );
}
export default App;
