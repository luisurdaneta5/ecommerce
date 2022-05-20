import React, { useState } from "react";
import {
	Box,
	Button,
	CardContent,
	Chip,
	Grid,
	Rating,
	Typography,
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Card } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "../../../actions/cart";
import "./styles.css";

export const ProductItem = (props) => {
	const products = props.products;

	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart);

	const handleAddCart = (id) => {
		items.find((item) => {
			if (item) {
				const itemFinder = {
					id: item.id,
				};
			}
		});

		// dispatch(cartAdd(pushItem));
	};

	const handleRemoveCart = () => {};

	const cantProduct = (id) => {
		let current = 0;
		items.find((item) => {
			if (item.id == id) {
				current = item.count;
			}
		});
		return current;
	};

	return (
		<Box
			sx={{
				position: "relative",
			}}
		>
			<Typography
				variant='h5'
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
				<i className='fa-solid fa-bolt' style={{ color: "red" }}></i>{" "}
				Ofertas Relampago
			</Typography>

			<Grid container spacing={2} columnSpacing={2}>
				{products.map((product, index) => (
					<Grid
						item
						key={product.id}
						xl={3}
						sx={{
							cursor: "pointer",
						}}
					>
						<Card
							sx={{
								boxShadow: "1px 1px 3px rgb(3 0 71 / 9%);",
							}}
						>
							<Box>
								<Chip
									label='30% off'
									size='small'
									sx={{
										backgroundColor: "#0f3460",
										color: "white",
										position: "absolute",
										zIndex: 11,
										mt: "10px",
										ml: "10px",
										padding: "9px",
									}}
								/>
								<img
									src={product.images}
									alt=''
									width={"100%"}
								/>
							</Box>
							<CardContent>
								<Grid container spacing={2}>
									<Grid item xl={10} sx={{ lineHeight: 2 }}>
										<Typography
											variant=''
											color='initial'
											sx={{
												fontWeight: "",
											}}
										>
											{product.name}
										</Typography>

										<Rating
											name='half-rating-read'
											defaultValue={2.5}
											precision={0.5}
											readOnly
											size='small'
										/>

										<Box sx={{ display: "flex" }}>
											<Typography
												variant='body1'
												sx={{
													color: "#0f3460",
												}}
											>
												$180.0
											</Typography>
											<Typography
												variant='body1'
												color='initial'
												sx={{
													ml: 2,
													textDecoration:
														"line-through",
												}}
											>
												180.0
											</Typography>
										</Box>
									</Grid>
									<Grid
										item
										xl={2}
										sx={{
											display: "flex",
											flexDirection: "column-reverse",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<Box>
											<Button
												onClick={() => handleAddCart()}
												variant='outlined'
												color='inherit'
												size='small'
												sx={{
													color: "#0f3460",
													borderColor: "#0f3460",
													":hover": {
														borderColor: "#0f3460",
														backgroundColor:
															"#f0f0f0",
													},
													minWidth: "10px",
													padding: "4px",
												}}
											>
												<AddShoppingCart />
												{/* <AddIcon /> */}
											</Button>
										</Box>

										<Box>
											<Typography
												variant=''
												color='inherit'
											>
												{cantProduct(product.id)}
											</Typography>
										</Box>

										<Box>
											<Button
												onClick={handleRemoveCart}
												variant='outlined'
												size='small'
												sx={{
													color: "#0f3460",
													borderColor: "#0f3460",
													":hover": {
														borderColor: "#0f3460",
														backgroundColor:
															"#f0f0f0",
													},
													minWidth: "10px",
													padding: "4px",
												}}
											>
												<RemoveIcon />
											</Button>
										</Box>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
