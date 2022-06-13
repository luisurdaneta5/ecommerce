import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Carousel } from "../../components/layouts/Carrousel/carouselSingle/Carousel";
import { products } from "../../data/data";
import { CarrouselProduct } from "../../components/layouts/Carrousel/carouselProduct/CarrouselProduct";
import { Navbar } from "../../components/layouts/Navbar/Navbar";
import { Footer } from "../../components/layouts/Footer/Footer";

export const HomeScreen = () => {
	return (
		<>
			<Box>
				<Navbar />;
			</Box>

			<Carousel />
			<Container maxWidth='lg'>
				<Box>
					<Typography
						variant='h5'
						color='black'
						sx={{
							position: "relative",
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
						Ofertas Relampago
					</Typography>

					<CarrouselProduct
						products={products}
						style={{ marginTop: "-100px" }}
					/>
				</Box>
			</Container>
			<Footer />
		</>
	);
};
