import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { menu } from '../../data/menu.json';

import './Menu.css';

export default class Menu extends Component {
	menu = () => {
		const pizzas = menu.map((element, index) => (
			<li key={index} className="pizza">
				<span className="pizzaName"> {element.pizza} </span>
				{element.description}
				<span className="pizzaPrice"> {element.price} </span>
			</li>
		));
		return pizzas;
	};

	render() {
		return (
			<div id="menu">
				<h1 className="main-heading">Notre Selection de Pizzas</h1>
				<Container fluid="false">
					<Row>
						<Col>
							<Card>
								<ul>{this.menu()}</ul>
							</Card>
						</Col>
						<Col>
							<Image
								src="/img/pizzaMenu.jpg"
								alt="Pizza"
								className="menu-img"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
