import React, { Component, PropTypes } from 'react';
import styler from 'react-styling';
import { title } from 'react-isomorphic-render';

export default class Page extends Component {
	render() {
		return (
			<section className="content">
				{title("Home")}
				<h1>Homepage Component</h1>
			</section>
		);
	}
}
