import React, { useState } from "react";
import {
	Container,
	Typography,
	Button,
	Box,
	Paper,
	TextField,
} from "@mui/material";

const Quiz = ({ questions }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [userinput, setUserInput] = useState("");
	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedOption(null);
			setUserInput("");
		} else {
			alert("You've completed the quiz!");
		}
	};

	return (
		<Container
			sx={{
				backgroundColor: "#f5f5f5",
				padding: "20px",
				borderRadius: "8px",
				textAlign: "center",
				maxWidth: "600px",
				marginTop: "15%",
				boxShadow: "0px 0px 50px 10px rgba(0, 0, 0, 0.75)",
				height: "auto",
			}}
		>
			<Paper
				elevation={3}
				sx={{
					padding: "20px",
					backgroundColor: "#ffffff",
					borderRadius: "8px",
					minHeight: "300px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						marginBottom: "20px",
						fontWeight: "bold",
						wordWrap: "break-word",
					}}
				>
					Question {currentQuestion + 1} of {questions.length}
				</Typography>
				<Typography
					variant="h6"
					sx={{ marginBottom: "20px", wordWrap: "break-word" }}
				>
					{questions[currentQuestion].question}
				</Typography>
				{questions[currentQuestion].type === "options" ? (
					<Box>
						{questions[currentQuestion].options.map(
							(option, index) => (
								<Button
									key={index}
									variant={
										selectedOption === option
											? "contained"
											: "outlined"
									}
									sx={{
										margin: "10px",
										padding: "10px 20px",
										fontSize: "16px",
										textTransform: "none",
										backgroundColor:
											selectedOption === option
												? "primary.main"
												: "#ffffff",
										color:
											selectedOption === option
												? "#ffffff"
												: "primary.main",
										":hover": {
											backgroundColor: "primary.light",
										},
										wordWrap: "break-word",
									}}
									onClick={() => handleOptionClick(option)}
								>
									{option}
								</Button>
							)
						)}
					</Box>
				) : (
					<TextField
						label="Answer"
						variant="outlined"
						fullWidth
						value={userinput}
						onChange={(e) => setUserInput(e.target.value)}
						sx={{ width: "20%" }}
					/>
				)}
				<Button
					variant="contained"
					color="primary"
					sx={{ marginTop: "20px" }}
					onClick={handleNext}
				>
					{currentQuestion < questions.length - 1 ? "Next" : "Finish"}
				</Button>
			</Paper>
		</Container>
	);
};

export default Quiz;
