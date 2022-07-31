export const SET_SELECTED_TAB = "SET_SELECTED_TAB";

export default function setSelectedTab(value) {

	return {
		type: SET_SELECTED_TAB,
		value,
	}
}
