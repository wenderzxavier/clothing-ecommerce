import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

interface SignInProps { }

interface SignInState {
  email: string,
  password: string
}

class SignIn extends React.Component<SignInProps, SignInState> {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const { value, name } = event.target;

    this.setState({ ...this.state, [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
