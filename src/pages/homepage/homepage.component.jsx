import React from "react";
import InitialCard from "../../components/initialCard/InitialCard";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Quiz App</h1>
        <InitialCard />
      </div>
    );
  }
}

export default Homepage;
