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
	}
	return [].concat(state);
}