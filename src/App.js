import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-and-sign-up/sign-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import { auth } from './firebase/firebas.utils';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser: user})

			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
