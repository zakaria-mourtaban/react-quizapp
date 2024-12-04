import React, { useState } from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	Link,
} from "@mui/material";
import "./signup.css";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Username:", username);
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<Container className="Container">
			<Box
				component="form"
				sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				className="login"
			>
				<Typography variant="h4" align="center" gutterBottom>
					Signup
				</Typography>
				<TextField
					label="Username"
					variant="outlined"
					fullWidth
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					label="Email"
					variant="outlined"
					fullWidth
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
					Sign Up
				</Button>
				<Typography variant="h6" align="center" gutterBottom>
					Already have an account?{" "}
					<Link underline="none">Sign In</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default Signup;
