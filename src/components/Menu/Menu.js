import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { menu } from '../../data/menu.json';
import Table from 'react-bootstrap/Table';

import './Menu.css';

export default class Menu extends Component {
	menu = () => {
		const pizzas = menu.map((element, index) => (
			<tr key={index}>
				<td>{element.pizza}</td>
				<td>{element.description}</td>
				<td>{element.price}</td>
			</tr>
		));
		return pizzas;
	};

	render() {
		return (
			<div id="menu">
				<div className="content">
					<h1 className="main-heading">Notre Selection de Pizzas</h1>
					<Container>
						<Row noGutters="true">
							<Col>
								<Card>
									<Table
										striped
										bordered
										hover
										variant="dark"
									>
										<thead>
											<tr>
												<th>La Pierrza</th>
												<th>Les Ingrédients</th>
												<th>Les Moneys</th>
											</tr>
										</thead>
										<tbody>{this.menu()}</tbody>
									</Table>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>

				<div className="overlay"></div>
			</div>
		);
	}
}
