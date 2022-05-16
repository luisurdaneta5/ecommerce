import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	IconButton,
	MenuItem,
	Tooltip,
	Avatar,
	Menu,
	Container,
} from "@mui/material";

import { SearchBar } from "./SearchBar";
import { BadgeN } from "./BadgeN";

const sections = ["Inicio", "Productos", "Quienes Somos", "Contactanos"];
const options = ["Mi Pefil", "Panel Control", "Salir"];

export const Navbar = () => {
	const [menuSettings, setMenuSettings] = useState(null);

	const [auth, setAuth] = useState();

	const handleOpenSettingMenu = (event) => {
		setMenuSettings(event.currentTarget);
	};

	const handleCloseSettingMenu = () => {
		setMenuSettings(null);
	};
	return (
		<div>
			<AppBar
				position='fixed'
				color='primary'
				sx={{
					height: "auto",
				}}
			>
				<Box
					sx={{
						background: "#0f3460",
					}}
				>
					<Container
						maxWidth='lg'
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: 1,
						}}
					>
						<Box
							sx={{
								display: "flex",
								fontSize: 14,
								color: "white",
							}}
						>
							<Typography variant=''>
								<i className='fab fa-whatsapp'></i>{" "}
								+5804127646787
							</Typography>
							<Typography variant='' sx={{ ml: 2 }}>
								<i className='fa-regular fa-envelope'></i>{" "}
								admin@admin.com
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								fontSize: 14,
								color: "white",
							}}
						>
							<Typography
								variant=''
								sx={{
									cursor: "pointer",
									":hover": {
										color: "blue",
									},
								}}
							>
								FAQ's
							</Typography>
						</Box>
					</Container>
				</Box>

				<Container maxWidth='lg'>
					<Toolbar sx={{}} disableGutters>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Typography noWrap href='/api'>
								<Box
									component='img'
									sx={{
										width: { md: 140, lg: 150, xl: 120 },
									}}
									src={`assets/images/logo.png`}
									alt='logo'
								/>
							</Typography>

							<SearchBar />

							{auth !== null ? (
								<Box
									sx={{
										flexGrow: 0,
									}}
								>
									<BadgeN
										icon={"fa-solid fa-bag-shopping"}
										cant={1}
									/>

									<Tooltip title='Abrir Opciones'>
										<IconButton
											aria-label=''
											onClick={handleOpenSettingMenu}
										>
											<Avatar
												sx={{
													width: {
														xs: 50,
														md: 60,
														lg: 50,
													},
													height: {
														xs: 50,
														md: 60,
														lg: 50,
													},
												}}
												alt='Luis Urdaneta'
												src={`assets/images/users/yo.jpg`}
											/>
										</IconButton>
									</Tooltip>
									<Menu
										id='menu-appbar'
										anchorEl={menuSettings}
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={Boolean(menuSettings)}
										onClose={handleCloseSettingMenu}
									>
										{options.map((option) => (
											<MenuItem key={option}>
												<Typography color='black'>
													{option}
												</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
							) : (
								<Tooltip title='Login / Register'>
									<BadgeN icon={"fa-regular fa-user"} />
								</Tooltip>
							)}
						</Box>
					</Toolbar>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row-reverse",
							justifyContent: "space-between",
							mt: 1,
							mb: 2,
						}}
					>
						<Box
							sx={{
								display: "flex",
							}}
						>
							{sections.map((section) => (
								<MenuItem key={section}>
									<Typography
										variant='body1'
										color='black'
										sx={{}}
									>
										{section}
									</Typography>
								</MenuItem>
							))}
						</Box>
					</Box>
				</Container>
			</AppBar>
		</div>
	);
};
