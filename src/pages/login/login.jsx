import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import "./login.css"

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Username:", username);
		console.log("Password:", password);
	};

	return (
		<Container
			className="Container"
		>
			<Box
				component="form"
				sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				className="login"
			>
				<Typography variant="h4" align="center" gutterBottom>
					Login
				</Typography>
				<TextField
					label="Username"
					variant="outlined"
					fullWidth
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					fullWidth
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					variant="contained"
					color="primary"
					fullWidth="true"
					onClick={handleSubmit}
				>
					Login
				</Button>
				<Typography variant="h6" align="center" gutterBottom>
					Don't have an account? <Link underline="none">Sign Up</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default Login;
