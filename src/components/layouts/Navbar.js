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
		<div
			style={{
				backgroundColor: "#0F3460",
				color: "white",
				height: "40px",
				display: "block",
				fontSize: "12px",
			}}
		>
			<Container
				maxWidth='lg'
				sx={{
					marginRight: "auto",
					boxSizing: "border-box",
					display: "flex",
					alignItems: "center",
					height: "100%",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<i
							className='fab fa-whatsapp'
							style={{
								width: "1em",
								height: "1em",
								display: "inline-block",
								fontSize: "1.25rem",
							}}
						></i>
						<Typography
							variant=''
							sx={{
								ml: "10px",
								lineHeight: 1.5,
								textTransform: "none",
								whiteSpace: "normal",
								justifyContent: "center",
							}}
						>
							+5804127646787
						</Typography>
					</Box>
					<Box
						sx={{
							ml: "20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<i
							className='fa-regular fa-envelope'
							style={{
								width: "1em",
								height: "1em",
								display: "inline-block",
								fontSize: "1.25rem",
							}}
						></i>
						<Typography
							variant=''
							sx={{
								ml: "10px",
								lineHeight: 1.5,
								textTransform: "none",
								whiteSpace: "normal",
							}}
						>
							admin@admin.com
						</Typography>
					</Box>
				</Box>

				<Box>FAQ's</Box>
			</Container>

			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					height: "90px",
					background: "#fff",
					transition: "height 250ms ease-in-out",
				}}
			>
				<Container
					maxWidth='lg'
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<img
							height='80'
							display='block'
							src='assets/images/logo.png'
							alt=''
						/>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							ml: 10,
						}}
					>
						<Box
							sx={{
								position: "relative",
								flex: "5 0 0",
								maxWidth: "1000px",
								marginLeft: "auto",
								marginWidth: "auto",
							}}
						>
							<SearchBar />
						</Box>
					</Box>

					<Box sx={{ display: "flex", alignItems: "center" }}>
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
				</Container>
			</Box>
		</div>
	);
};
