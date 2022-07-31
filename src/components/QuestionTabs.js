import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useDispatch } from "react-redux";
import setSelectedTab from "../actions/selectedTab";


const QuestionTabs = (props) => {

	const [value, setValue] = React.useState(0);
	const dispatch = useDispatch();

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
		dispatch(setSelectedTab(newValue));
	};

	return (
		<Box sx = {{ width: '100%', bgcolor: 'background.paper' }}>
			<Tabs value = {value} onChange = {handleTabChange} centered indicatorColor = "secondary">
				<Tab label = "Unanswered"/>
				<Tab label = "Answered"/>
				<Tab label = "All"/>
			</Tabs>
		</Box>
	);
}

export default QuestionTabs;
