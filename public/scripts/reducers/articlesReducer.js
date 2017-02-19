export default function articlesReducer (state = [], action) {
	let newState;
	switch (action.type) {
		case "UPDATE_ARTICLES":
			return [].concat(action.payload);
		case "ADD_ARTICLE":
			newState = state.slice();
			newState.push(action.payload);
			return newState;
		case "REMOVE_ARTICLE":
			newState = state.slice(); ;
			return newState.filter(article => article._id != action.payload);	
		case "UPDATE_ARTICLE":
			const updatedArticle = action.payload;
			return state.map((article) => {
				if (article._id != updatedArticle._id) {return article;}

				return Object.assign({}, article, {title: 12, text: 12, author: 12})
			});							
	}
	return [].concat(state);
}