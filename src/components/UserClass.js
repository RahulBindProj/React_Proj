import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RahulBindProj");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "componentDidMount");
  }

  render() {
    console.log(this.props.name + "render");
    const { login, location } = this.state.userInfo;
    return (
      <>
        <div className="class-comp-cont">
          <h1>I am , {login}</h1>
          <h2>Location , {location ? null : "mumbai"}</h2>
        </div>
      </>
    );
  }

  componentDidUpdate() {
    console.log(this.props.name + "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "componentWillUnmount");
  }
}

export default UserClass;

/**
 *
 * Mounting
 *
 * constructor
 * render()
 *  <HTML Dummy>
 * CompnonedDidMount
 *  API Call
 *  this.setState - > state variable is updated
 *
 *
 * UPdate
 *
 *   render()
 *    <HTML with API data> , ---- at this point user will the HTML with update content
 *    componentDidUpdate
 *
 *
 * unmount
 *
 *  When we go to this new page component unmountwill be called
 *
 *
 *
 */

// NOTE : WHenever the setState is called it trigrres the reconcilation proccess and upate the dom
