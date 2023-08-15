import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Hello React");
    // }, 1000);
    // console.log(this.props.name + " componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.count !== prevState.count) {
    // }
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log(this.props.name + " render");

    return (
      <div>
        <h1>Profile Class Component</h1>
      </div>
    );
  }
}

export default Profile;
