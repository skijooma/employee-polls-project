import { Box, Typography } from "@mui/material";
import * as React from "react";


const NotFoundPage = () => {

	return (
		<Box sx = {{
			display: 'flex',
			flexDirection: "column",
			alignItems: "center",
			width: "80%",
			backgroundColor: "whitesmoke",
			mx: "auto",
			p: 3
		}}>
			<Box>
				<Typography variant = "h1" color = "black" fontWeight = "bold" letterSpacing = {0.3} margin = {5}>
					Sorry,
				</Typography>
				<Typography variant = "h2" color = "black" fontWeight = "bold" letterSpacing = {0.3} margin = {5}>
					page not found
				</Typography>
			</Box>
			<Box display = "flex">
				<img className = "fit-picture"
					 src = "https://faboldeb.sirv.com/dog-404.jpg" width = "462" height = "309"
					 alt = "Page not found!"/>
			</Box>
		</Box>


	);
};

export default NotFoundPage;
