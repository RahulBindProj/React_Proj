// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <>
//       <h1>About US</h1>
//       {/* <User /> */}
//       <UserClass
//         name={"Rahul Bind Class Component()"}
//         location={"I am from Mumbai"}
//       />
//     </>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <>
        <h1>About US</h1>
        <UserClass name={"First Component()"} location={"I am from Mumbai"} />
      </>
    );
  }
}

export default About;
