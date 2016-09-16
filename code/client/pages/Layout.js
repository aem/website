import React, { Component, PropTypes } from 'react'

// testing `flat` styler
import styler   from 'react-styling/flat'

import { head } from 'react-isomorphic-render'

export default class Layout extends Component {
	static propTypes: {
		children : PropTypes.object.isRequired
	};

	render() {
		// Html document metadata

		const title = 'Home | Adam Markon';
		const description = 'A generic web application boilerplate';

		const meta = [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
			{ property: 'og:title',       content: 'Adam Markon' },
			{ property: 'og:description', content: `Adam Markon is a software developer specializing in front-end web development and React.` },
			{ property: 'og:locale',      content: 'es-US' }
		];

		return (
			<div className="content">
				{head(title, meta)}
				<header>
				</header>
				{this.props.children}
			</div>
		);
	}
}
