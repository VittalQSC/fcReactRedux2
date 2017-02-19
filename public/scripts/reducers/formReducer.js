export default function formReducer (state = {}, action) {
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
			return Object.assign({}, state, {title: '', text: '', author: '', createDate: ''});
	}
	return Object.assign({title: '', text: '', author: '', createDate: ''}, state);
}