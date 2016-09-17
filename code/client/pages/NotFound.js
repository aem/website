import React, { Component } from 'react'
import { title } from 'react-isomorphic-render'
import styler from 'react-styling'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				{title("Page not found")}

				<h1>page not found</h1>
				<h6>A brief poem, if you will...</h6>
				<blockquote>
					404 Not Found
					<br />
					You arrived here, curious
					<br />
					But alas, no content
				</blockquote>
			</div>
		);
	}
}
