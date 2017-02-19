import { createStore, combineReducers } from 'redux'

function articlesReducer (state = [], action) {
	switch (action.type) {
		case "UPDATE_ARTICLES":
			return [].concat(action.payload); 
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