import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
			<ToastContainer />
		</Provider>
	);
};
