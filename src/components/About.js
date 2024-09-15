// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
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

        <UserContext.Consumer>
          {(data) => <h1>User : {data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass name={"First Component()"} location={"I am from Mumbai"} />
      </>
    );
  }
}

export default About;
