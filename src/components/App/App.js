// Main app component

//Module import
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
				<div className="navbar-fixed">
					<nav className="nav-wrapper">
						<p className="brand-logo">PIERRZA</p>
						<ul
							id="nav-mobile"
							className="right hide-on-med-and-down"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="About">About</Link>
							</li>
							<li>
								<Link to="Cart">Cart</Link>
							</li>
						</ul>
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
