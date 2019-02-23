import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  confirmInput = event => {
    event.preventDefault()
    if(this)
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username}
            onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.state.password}
            onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
