//Home page Component

//Module import
import React, { Component } from 'react';

//Style import
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="homeContainer">
				<h1 className="main-heading">LA PIERZZA</h1>
			</div>
		);
	}
}

export default Home;
