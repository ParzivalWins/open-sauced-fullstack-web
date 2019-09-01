import React, {Component} from "react";
import {createViewer} from "../queries";
import {graphql} from "react-apollo";
import logo from "./logo8.svg";
import {FlexCenter} from "../styles/Grid";
import Button from "../styles/Button";

const spacingStyle = {margin: "auto", padding: 100, textAlign: "center"};

export class Login extends Component {
  render() {
    const {handleLogIn} = this.props;
    return (
      <FlexCenter>
        <div style={spacingStyle}>
          <img src={logo} alt="logo" />
          <p style={{marginTop: 16}}>The path towards open-source contributions.</p>
          <Button onClick={handleLogIn}>Login to get Saucin</Button>
        </div>
      </FlexCenter>
    );
  }
}

const LoginWithMutation = graphql(createViewer)(Login);

export default LoginWithMutation;
