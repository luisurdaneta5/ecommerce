import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { App } from "./App";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
	},
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
