import {
	Container,
	Table,
	TableHead,
	TableContainer,
	TableRow,
	TableCell,
	TableBody,
	Paper,
} from "@mui/material";
import React from "react";
import "./leaderboard.css"

const rows = [
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
];

const Leaderboard = () => {
	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Weekly</TableCell>
							<TableCell>Monthly</TableCell>
							<TableCell>AllTime</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow>
								<TableCell>{row.ranking}</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.weekly}</TableCell>
								<TableCell>{row.monthly}</TableCell>
								<TableCell>{row.alltime}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default Leaderboard;
