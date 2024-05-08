import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";

const Home = ({ signOut, user }) => {
  return (
    <div className="home-page">
      <Header signOut={signOut} />
      <Form user={user} />
    </div>
  );
};

export default Home;
