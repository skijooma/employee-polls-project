import moment from "moment";


export default function formatTime(timestamp) {

	const date = new Date(timestamp);

	return moment(date).format('lll');
}
