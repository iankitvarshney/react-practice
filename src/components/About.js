import Profile from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent-constructor");
  }

  componentDidMount() {
    // console.log("parent-componentDidMount");
  }

  render() {
    // console.log("parent-render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us Page</p>
        <Profile />
      </div>
    );
  }
}

export default About;
