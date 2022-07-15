
// import {
// 	_getUsers,
// 	_getTweets,
// 	_saveLikeToggle,
// 	_saveTweet,
// } from './_DATA.js'

import { _getQuestions, _getUsers } from "./_DATA";


export function getInitialData () {
	return Promise.all([
		_getUsers(),
		_getQuestions(),
	]).then(([users, questions]) => ({
		users,
		questions,
	}))
}

// export function saveLikeToggle (info) {
// 	return _saveLikeToggle(info)
// }
//
// export function saveTweet (info) {
// 	return _saveTweet(info)
// }
