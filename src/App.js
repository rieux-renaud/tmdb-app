import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import About from "./pages/About";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home signOut={signOut} user={user} />} />
            <Route path="/coup-de-coeur" element={<UserList user={user} />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<Home signOut={signOut} user={user} />} />
          </Routes>
        </BrowserRouter>
      )}
    </Authenticator>
  );
}
export default App;
