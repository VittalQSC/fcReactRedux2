import { createStore, combineReducers } from 'redux'

function articlesReducer (state = [], action) {
	switch (action.type) {
		case "UPDATE_ARTICLES":
			return [].concat(action.payload); 
	}
	return [].concat(state);
}

const appReducer = combineReducers({
	articles: articlesReducer
});

let store = createStore(appReducer);
store.dispatch({type: 'some_aciton', name: 12});
export default store;