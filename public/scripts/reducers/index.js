import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import formReducer from './formReducer'

const appReducer = combineReducers({
	articles: articlesReducer,
	form: formReducer
});

export default appReducer;