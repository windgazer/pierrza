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
				<div className="carousel-container"></div>
			</div>
		);
	}
}

export default Home;
