import React from 'react';

export default class Article extends React.Component {
	render (props) {
		return (
				<li>
					<h1>TITLE</h1>
					<div>TEXT</div>
					<strong>AUTHOR</strong>
					<div>
						<small>CREATE DATE</small>
					</div>
					<button>Delete</button>
					<div>----</div>
				</li>
			);
	}
}