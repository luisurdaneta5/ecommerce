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

			<Container maxWidth='lg'></Container>
		</div>
	);
};
