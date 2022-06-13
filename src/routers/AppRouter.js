import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartScreen } from "../page/Shopping/CartScreen";
import { HomeScreen } from "../page/Home/HomeScreen";
import { NotFoundScreen } from "../page/404/NotFoundScreen";
import { DetailsScreen } from "../page/Shopping/DetailsScreen";
import { DashboardScreen } from "../page/Dashboard/DashboardScreen";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/cart' element={<CartScreen />} />
			<Route path='/cart/details' element={<DetailsScreen />} />
			<Route path='/dashboard' element={<DashboardScreen />} />
			<Route path='*' element={<NotFoundScreen />} />
		</Routes>
	);
};
