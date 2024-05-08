import React from "react";
import Header from "../components/Header";

const about = () => {
  return (
    <div className="about-page">
      <Header />

      <div className="row">
        {/* <div className="column"> */}
        {/* <div className="card"> */}
        <img src="../../../assets/images/tmdb-app.png" alt="TMDB App" />
        <div className="container">
          <h2>About me</h2>
          <p>
            Hi there! I'm Renaud, a passionate QA engineer with a keen interest
            in building applications on AWS. This portfolio project is a movie
            tracker web app built with React and AWS Amplify.
          </p>
          <p>
            Users can search for detailed information about movies and add them
            to their "seen movies" list for easy reference. The app utilizes
            React components, state management, and user authentication features
            of AWS Amplify. Additionally, I leveraged Cognito to manage my
            users.
          </p>
          <p>
            Feel free to browse the rest of my portfolio to learn more about my
            skills and experience. You can also find the source code for this
            project on my GitHub:
            [https://github.com/rieux-renaud?tab=repositories].
          </p>
          <p>Contact : rieux.renaud.94@gmail.com</p>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default about;
