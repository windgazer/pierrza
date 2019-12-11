// Main app component

//Module import
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Cart from '../Cart/Cart';

//Styles import

import './App.css';

//App component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<Router>
				<div className="nav-container">
					<nav className="nav-wrapper">
						<Link to="/">Home</Link>
						&nbsp;
						<Link to="About">About</Link>
						&nbsp;
						<Link to="Cart">Cart</Link>
					</nav>
				</div>

				<Switch>
					<Route path="/About">
						<About></About>
					</Route>
					<Route path="/Cart">
						<Cart></Cart>
					</Route>

					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
