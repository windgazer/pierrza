//Home page Component

//Module import
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

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
				<Carousel className="carousel">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/pizza1.jpg"
							alt="First slide"
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/pizza2.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/pizza3.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/pizza4.jpg"
							alt="Fourth slide"
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/pizza5.jpg"
							alt="Fith slide"
						/>
					</Carousel.Item>
				</Carousel>
				<Button
					className="showcase-btn"
					variant="secondary"
					size="lg"
					block
				>
					En savoir plus...
				</Button>
			</div>
		);
	}
}

export default Home;
