import { CheckCircle } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import setAuthedUser from "../actions/authedUser";


const pages = ['home', 'leaderboard', 'add'];

const Nav = () => {

	const { authedUser, users } = useSelector(state => state);
	const [user, setUser] = useState(users[authedUser]);
	const [logInStateText, setLogInStateText] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		setUser(users[authedUser]);
		users[authedUser] ? setLogInStateText("Logout") : setLogInStateText("Login");
	}, [authedUser, users]);

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		logUserOut();
		setAnchorElUser(null);
	};

	const logUserOut = () => {
		if (authedUser && (logInStateText === "Logout")) {
			dispatch(setAuthedUser(null));
		}
	}

	return (
		<AppBar position = "static">
			<Container maxWidth = "xl">
				<Toolbar disableGutters className = "navToolBar">
					<CheckCircle sx = {{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
					<Typography
						variant = "h6"
						noWrap
						component = "a"
						href = "/"
						sx = {{
							mr: 5,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.05rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Employee Polls App
					</Typography>

					<Box sx = {{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key = {page}
								onClick = {handleCloseNavMenu}
								sx = {{ my: 2, color: 'white', display: 'block' }}
							>
								<Link to = {`/${page}`} className = "navLinks">{page}</Link>
							</Button>
						))}
					</Box>

					<Box sx = {{ flexGrow: 0 }}>
						<div className = "userInfoBox">
							<Tooltip title = "Open settings">
								<IconButton onClick = {handleOpenUserMenu} sx = {{ p: 0 }}>
									<Avatar alt = "{ user && user.name }"
											src = {(user && user.avatarURL) ? user.avatarURL : ""}/>
								</IconButton>
							</Tooltip>

							{user && (
								<Typography variant = "body2" color = "white" fontWeight = "bold" letterSpacing = {0.3}
											margin = {2} data-testid = "name">
									{user.name}
								</Typography>
							)}
						</div>
						<Menu
							sx = {{ mt: '45px' }}
							id = "menu-appbar"
							anchorEl = {anchorElUser}
							anchorOrigin = {{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin = {{
								vertical: 'top',
								horizontal: 'right',
							}}
							open = {Boolean(anchorElUser)}
							onClose = {handleCloseUserMenu}
						>
							<MenuItem onClick = {handleCloseUserMenu}>
								<Typography textAlign = "center">{logInStateText}</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Nav;
