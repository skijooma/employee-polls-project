import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import authedUser from "./authedUser";
import selectedTab from "./selectedTab";
import users from "./users";
import questions from "./questions";

export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer,
	selectedTab,
});
