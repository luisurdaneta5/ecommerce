import React from "react";
import { Container } from "@mui/material";

import { Navbar } from "../components/layouts/Navbar/Navbar";
import { Slider } from "../components/layouts/Carrousel/Slider";
import { Footer } from "../components/layouts/Footer/Footer";
import { CardProduct } from "../components/layouts/Products/CardProduct";

export const HomeScreen = () => {
	const products = [
		{
			id: "12",
			product: "Cauchos Invovic",
			description: "205/55 R16",
			price: "50 USD",
			images: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75",
		},
		{
			id: "123",
			product: "CAUCHO INVOVIC",
			description: "205/55 R16",
			price: "50 USD",
			images: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
		},
		{
			id: "1234",
			product: "CAUCHO INVOVIC",
			description: "205/55 R16",
			price: "50 USD",
			images: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1920&q=75",
		},
		{
			id: "12345",
			product: "CAUCHO INVOVIC",
			description: "205/55 R16",
			price: "50 USD",
			images: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1920&q=75",
		},
	];
	return (
		<>
			<Navbar />;
			<Slider />
			<Container maxWidth='lg'>
				<CardProduct products={products} />
			</Container>
			<Footer />
		</>
	);
};
