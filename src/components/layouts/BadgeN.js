import React from "react";
import { IconButton, Badge, Box } from "@mui/material";

export const BadgeN = (props) => {
	const shapeStyles = {
		bgcolor: "#f3f5f9",
		width: 40,
		height: 40,
	};
	const shapeCircleStyles = { borderRadius: "50%" };
	const circle = (
		<Box component='span' sx={{ ...shapeStyles, ...shapeCircleStyles }}>
			<i
				className={props.icon}
				style={{
					fontSize: 20,
				}}
			></i>
		</Box>
	);

	return (
		<IconButton>
			<Badge badgeContent={props.cant} color='error'>
				{circle}
			</Badge>
		</IconButton>
	);
};
