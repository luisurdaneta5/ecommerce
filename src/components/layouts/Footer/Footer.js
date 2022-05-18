import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export const Footer = () => {
	return (
		<footer>
			<Box
				sx={{
					background: "#0f3460",
					mt: 10,
				}}
			>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item>Hola</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};
