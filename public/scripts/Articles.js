import 'whatwg-fetch'
import React from 'react'
import { connect } from 'react-redux'
import Article from './Article.js'
import Form from './Form'
import axios from 'axios';

class Articles extends React.Component {
	constructor (props) {
		super(props);
		var that = this;
		this.state = {articles: []};

		axios.get('/articles').then(response => {that.props.updateArticles(response.data)})
		
	}

	render (props) {
		var articles = this.props.articles.map(article => <Article key={article._id} article={article}/>);
		return (
				<div>
					<Form />
					<div style={{height: "50px"}}></div>
					<div>Articles number: {articles.length}</div>
					<div></div>
					<ul>
							{articles}
					</ul>
					<div>Articles number: {articles.length}</div>
				</div>			

			);
	}
} 

function mapStateToProps (state) {
	return {
		articles: state.articles
	}
}

function mapActionsToProps (dispatch) {
	return {
		updateArticles (articles)  {
			dispatch({type: "UPDATE_ARTICLES", payload: articles});
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Articles);