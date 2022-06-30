import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonEvent: true,
  }

inputState = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  }, () => this.isDisableCondition());
}

isDisableCondition = () => {
  const amountCaract = 6;
  const { email, password } = this.state;
  if (email.includes('@' && '.com')
   && password.length >= amountCaract) {
    this.setState({
      buttonEvent: false,
    });
  } else {
    this.setState({
      buttonEvent: true,
    });
  }
}

render() {
  const { email, password, buttonEvent } = this.state;
  return (
    <div>
      <h3>Login</h3>
      <form>
        <label htmlFor="input-email">
          <input
            id="input-email"
            type="email"
            name="email"
            value={ email }
            placeholder="alguem@alguem.com"
            data-testid="email-input"
            onChange={ this.inputState }
          />
        </label>
        <label htmlFor="input-password">
          <input
            id="input-password"
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.inputState }
          />
        </label>
        <button
          type="button"
          disabled={ buttonEvent }
        >
          Entrar
        </button>
      </form>
    </div>);
}
}

export default Login;
