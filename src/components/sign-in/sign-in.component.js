import React from "react";

import './sign-in.styles.scss';

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebas.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'blablabla@gmail.com',
			password: '123321123321'
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({email: '', password: ''})
	}

	handleChange = event => {
		const {value, name} = event.target;
		this.setState({[name]: value})
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='Email'
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required />

					<FormInput
						label='Password'
						type="password"
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required/>

					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn;