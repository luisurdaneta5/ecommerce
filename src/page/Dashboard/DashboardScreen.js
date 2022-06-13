import React from "react";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";
import { Footer } from "../../components/layouts/Footer/Footer";
import { Navbar } from "../../components/layouts/Navbar/Navbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link } from "react-router-dom";
import "./style.css";

export const DashboardScreen = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='lg' sx={{ mt: 25 }}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Paper sx={{ padding: "20px" }} className='paper'>
							<Box>
								<Typography
									color='initial'
									sx={{ fontSize: "12px", fontWeight: 400 }}
								>
									OPCIONES
								</Typography>
								<Link
									to='/my-profile/orders'
									className='active'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<ShoppingBagOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Ordenes
										</Typography>
									</Box>
									<Typography>1</Typography>
								</Link>
								<Link
									to='/my-profile/orders'
									className='MenuLinkDashboard'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<FavoriteBorderOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Lista de Deseo
										</Typography>
									</Box>
									<Typography>2</Typography>
								</Link>
								<Link
									to='/my-profile/orders'
									className='MenuLinkDashboard'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<HeadsetMicOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Soporte
										</Typography>
									</Box>
									<Typography>0</Typography>
								</Link>
							</Box>

							<Typography
								color='initial'
								sx={{
									fontSize: "12px",
									fontWeight: 400,
									mt: 5,
								}}
							>
								MI CUENTA
							</Typography>
							<Link
								to='/my-profile/orders'
								className='MenuLinkDashboard'
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										ml: 2,
									}}
								>
									<PersonRoundedIcon fontSize='small' />
									<Typography sx={{ ml: 1 }}>
										Perfil
									</Typography>
								</Box>
							</Link>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};
