import { useState, useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    // setInterval(() => {
    //   console.log("Hello React");
    // }, 1000);

    return () => {
      // console.log("useEffect return");
    };

    // console.log("useEffect");
  }, []);

  // console.log("render");

  return (
    <div>
      <h1>Profile Component</h1>
    </div>
  );
};

export default Profile;
