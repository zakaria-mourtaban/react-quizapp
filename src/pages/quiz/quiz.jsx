import React, { useState } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";

const Quiz = ({ questions }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedOption(null);
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
			}}
		>
			<Paper
				elevation={3}
				sx={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px" }}
			>
				<Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
					Question {currentQuestion + 1} of {questions.length}
				</Typography>
				<Typography variant="h6" sx={{ marginBottom: "20px" }}>
					{questions[currentQuestion].question}
				</Typography>
				<Box>
					{questions[currentQuestion].options.map((option, index) => (
						<Button
							key={index}
							variant={selectedOption === option ? "contained" : "outlined"}
							sx={{
								margin: "10px",
								padding: "10px 20px",
								fontSize: "16px",
								textTransform: "none",
								backgroundColor: selectedOption === option ? "primary.main" : "#ffffff",
								color: selectedOption === option ? "#ffffff" : "primary.main",
							}}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</Button>
					))}
				</Box>
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
