import Profile from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>This is the About Us Page</p>
        <Profile />
      </div>
    );
  }
}

export default About;
