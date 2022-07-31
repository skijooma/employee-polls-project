import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import selectedTab from "./selectedTab";
import users from "./users";


export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer,
	selectedTab,
});
