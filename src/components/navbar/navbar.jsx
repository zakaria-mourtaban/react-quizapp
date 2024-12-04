import React from "react";
import { Button } from "@mui/material";
import "./navbar.css"

const Navbar = () => {
	return (
		<div className="navbar">
			<Button
				variant="text"
				size="large"
				sx={{ fontSize: "20px", fontWeight: "bold" }}
			>
				Quiz
			</Button>
			<Button
				variant="text"
				size="large"
				sx={{ fontSize: "20px", fontWeight: "bold" }}
			>
				LeaderBoard
			</Button>
			<Button
				variant="text"
				size="large"
				sx={{ fontSize: "20px", fontWeight: "bold" }}
			>
				Profile
			</Button>
		</div>
	);
};

export default Navbar;
