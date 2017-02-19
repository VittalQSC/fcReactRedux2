import { createStore, combineReducers } from 'redux'

function articlesReducer (state = [], action) {
	switch (action.type) {
		case "UPDATE_ARTICLES":
			return [].concat(action.payload);
		case "ADD_ARTICLE":
			let newState = state.slice();
			newState.push(action.payload);
			return newState;			
	}
	return [].concat(state);
}

function formReducer (state = {}, action) {
	switch (action.type) {
		case "UPDATE_FORM_TITLE":
			return Object.assign({}, state, {title: action.payload});
		case "UPDATE_FORM_TEXT":
			return Object.assign({}, state, {text: action.payload});
		case "UPDATE_FORM_AUTHOR":
			return Object.assign({}, state, {author: action.payload});
		case "UPDATE_FORM_CREATE_DATE":
			return Object.assign({}, state, {createDate: action.payload});
		case "RESET_FORM":
			return {
			         title: '',
			         text: '',
			         author: '',
			         createDate: ''
			      };
	}
	return Object.assign({
         title: '',
         text: '',
         author: '',
         createDate: ''
      }, state);
}

const appReducer = combineReducers({
	articles: articlesReducer,
	form: formReducer
});

let store = createStore(appReducer);
export default store;