import React from "react";
import {
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardActions,
	IconButton,
	Button,
	Tooltip,
	Container,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Navbar } from "../layouts/Navbar";
import { Slider } from "../layouts/Slider";
import { Footer } from "../layouts/Footer";

const products = [
	{
		id: "125635",
		product: "CAUCHO INVOVIC",
		description: "205/55 R16",
		price: "50 USD",
		images: "https://diarmagroup.com/resources/assets/img/products/product12/_MG_4923.jpg",
	},
	{
		id: "125635",
		product: "CAUCHO INVOVIC",
		description: "205/55 R16",
		price: "50 USD",
		images: "https://diarmagroup.com/resources/assets/img/products/product12/_MG_4923.jpg",
	},
	{
		id: "125635",
		product: "CAUCHO INVOVIC",
		description: "205/55 R16",
		price: "50 USD",
		images: "https://diarmagroup.com/resources/assets/img/products/product12/_MG_4923.jpg",
	},
	{
		id: "125635",
		product: "CAUCHO INVOVIC",
		description: "205/55 R16",
		price: "50 USD",
		images: "https://diarmagroup.com/resources/assets/img/products/product12/_MG_4923.jpg",
	},
];

export const HomeScreen = () => {
	return (
		<>
			<Navbar />;
			<Slider />
			<Container maxWidth='lg'>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Typography
						variant='h4'
						color='black'
						sx={{
							position: "relative",
							zIndex: 10,
							display: "inline-block",
							fontWeight: 700,
							color: "#1d1d1d",
							lineHeight: "100px",
						}}
					>
						<i
							className='fa-solid fa-bolt'
							style={{ color: "red" }}
						></i>{" "}
						Ofertas relampago
					</Typography>

					<Grid container spacing={5} columnSpacing={2}>
						{products.map((product) => (
							<Grid
								item
								key={product}
								xl={3}
								sx={{
									cursor: "pointer",
								}}
							>
								<Card>
									<img
										src={product.images}
										alt=''
										width={"100%"}
									/>
									<CardContent>
										<Grid container spacing={2}>
											<Grid item xl={9}>
												<Typography
													variant='body1'
													color='initial'
													sx={{
														fontWeight: "bold",
													}}
												>
													{product.product}
												</Typography>
												<Typography
													variant='captation'
													color='initial'
												>
													Medidas: {product.measures}
												</Typography>
											</Grid>
											<Grid item xl={3}>
												<Typography
													variant='h6'
													color='initial'
													sx={{
														fontWeight: "bold",
													}}
												>
													{product.price}
												</Typography>
											</Grid>
										</Grid>
									</CardContent>
									<CardActions>
										<IconButton>
											<FavoriteIcon />
										</IconButton>
										<Tooltip title='Agregar a Carrito'>
											<Button
												size='medium'
												aria-label='add'
												variant='extended'
												sx={{
													width: "100%",
													backgroundColor: "#0000c1",
													color: "white",
													":hover": {
														backgroundColor:
															"#0000a0",
													},
												}}
											>
												<i className='fa-solid fa-cart-arrow-down me-2'></i>
												Agregar
											</Button>
										</Tooltip>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
			<Footer />
		</>
	);
};
