import React from 'react';
import Article from './Article.js';

export default class Articles extends React.Component {
	render (props) {
		var articles = [1,2,3].map(article => <Article />);
		return (
				<div>
					<div>Articles number: </div>
					<div></div>
					<ul>
							{articles}
					</ul>
					<div></div>
					<div>Articles number: </div>
				</div>			

			);
	}
} 