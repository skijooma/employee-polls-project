

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch } from "react-redux";
import setSelectedTab from "../actions/selectedTab";


const QuestionTabs = (props) => {

	const [value, setValue] = React.useState(0);
	const dispatch = useDispatch();

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
		console.log("TAb click event => ", newValue, props)
		dispatch(setSelectedTab(newValue));
	};

	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<Tabs value={value} onChange={handleTabChange} centered indicatorColor="secondary">
				<Tab label="Unanswered" />
				<Tab label="Answered" />
				<Tab label="All" />
			</Tabs>
		</Box>
	);
}

export default QuestionTabs;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
//
// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;
//
// 	return (
// 		<div
// 			role="tabpanel"
// 			hidden={value !== index}
// 			id={`full-width-tabpanel-${index}`}
// 			aria-labelledby={`full-width-tab-${index}`}
// 			{...other}
// 		>
// 			{value === index && (
// 				<Box sx={{ p: 3 }}>
// 					<Typography>{children}</Typography>
// 				</Box>
// 			)}
// 		</div>
// 	);
// }
//
// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.number.isRequired,
// 	value: PropTypes.number.isRequired,
// };
//
// function a11yProps(index) {
// 	return {
// 		id: `full-width-tab-${index}`,
// 		'aria-controls': `full-width-tabpanel-${index}`,
// 	};
// }
//
// const QuestionTabs = () => {
// 	const theme = useTheme();
// 	const [value, setValue] = React.useState(0);
//
// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};
//
// 	const handleChangeIndex = (index) => {
// 		setValue(index);
// 	};
//
// 	return (
// 		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
// 			<AppBar position="static">
// 				<Tabs
// 					value={value}
// 					onChange={handleChange}
// 					indicatorColor="secondary"
// 					textColor="inherit"
// 					centered
// 				>
// 					<Tab label="Item One" {...a11yProps(0)} />
// 					<Tab label="Item Two" {...a11yProps(1)} />
// 					<Tab label="Item Three" {...a11yProps(2)} />
// 				</Tabs>
// 			</AppBar>
// 		</Box>
// 	);
// }
//
// export default QuestionTabs;
