//Home page Component

//Module import
import React, { Component } from 'react';
import { Carousel, Button, Icon } from 'react-materialize';
import M from 'materialize-css/dist/js/materialize.min.js';

//Style import
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this._auto();
	}

	_auto = () => {
		setInterval(() => {
			const element = M.Carousel.getInstance(
				document.querySelector('.images')
			);
			element.next();
		}, 2000);
	};

	render() {
		return (
			<div className="homeContainer">
				<div className="carousel-container">
					<Carousel
						images={[
							'/img/pizza1.jpg',
							'/img/pizza2.jpg',
							'/img/pizza3.jpg',
							'/img/pizza4.jpg',
							'/img/pizza5.jpg'
						]}
						options={{
							fullWidth: true,
							indicators: false
						}}
						className="images"
					/>
				</div>
				<Button
					large
					node="a"
					style={{
						marginRight: '5px'
					}}
					waves="light"
				>
					Button
					<Icon left>cloud</Icon>
				</Button>
			</div>
		);
	}
}

export default Home;
