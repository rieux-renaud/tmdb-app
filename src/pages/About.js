import React from "react";
import Header from "../components/Header";

const about = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={
                "https://tmdb-app-assets.s3.eu-west-3.amazonaws.com/developer.jpeg"
              }
              alt="Renaud"
            />
            <div className="container">
              <h2>Renaud RIEUX</h2>
              <p>
                Hi there! I'm Renaud, a passionate QA engineer with a keen
                interest in building applications on AWS. This portfolio project
                is a movie tracker web app built with React and AWS Amplify.
                Users can search for detailed information about movies and add
                them to their "seen movies" list for easy reference. The app
                utilizes React components, state management, and user
                authentication features of AWS Amplify.
                <br />
                Github: https://github.com/rieux-renaud?tab=repositories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
