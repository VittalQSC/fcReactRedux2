import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

class Article extends React.Component {
	constructor (props) {
		super(props);
		this.deleteArticle = this.deleteArticle.bind(this);
	}

	deleteArticle (e) {
		axios.get('/articles/remove/' + this.props.article._id)
		this.props.removeArticle(this.props.article._id);
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
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Article);