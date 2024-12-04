import React from "react";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Leaderboard from "./pages/leaderboard/leaderboard.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/app.css";
import "@fontsource/poppins";
import Quiz from "./pages/quiz/quiz.jsx";

const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'Roboto', sans-serif",
	},
});

const App = () => {
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<Navbar />
				<Quiz />
			</ThemeProvider>
		</div>
	);
};

export default App;
