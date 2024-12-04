import React from "react";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

import "@fontsource/poppins";

const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'Roboto', sans-serif",
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Signup />
		</ThemeProvider>
	);
};

export default App;
