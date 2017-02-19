import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

class Article extends React.Component {
	constructor (props) {
		super(props);
		this.deleteArticle = this.deleteArticle.bind(this);
		this.updateArticle = this.updateArticle.bind(this);
	}

	deleteArticle (e) {
		axios.get('/articles/remove/' + this.props.article._id)
		this.props.removeArticle(this.props.article._id);
	}	

	updateArticle (e) {
		// mock update to save time
		axios.get('/articles/updated/' + this.props.article._id + '?author=12&text=12&title=12')
		this.props.updateArticle(this.props.article);
	}

	render (props) {
		const article = this.props.article;
		return (
				<li>
					<h1>{article.title}</h1>
					<div>{article.text}</div>
					<strong>{article.author}</strong>
					<div>
						<small>{article.createDate}</small>
					</div>
					<button onClick={this.deleteArticle}>Delete</button>
					<button onClick={this.updateArticle}>Update</button>
					<div>----</div>
				</li>
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
		removeArticle (id)  {
			dispatch({type: "REMOVE_ARTICLE", payload: id});
		},
		updateArticle (article) {
			dispatch({type: "UPDATE_ARTICLE", payload: article})
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Article);