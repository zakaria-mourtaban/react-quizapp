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
import "./leaderboard.css";

const rows = [
	{ ranking: 1, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 2, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 3, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 4, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 5, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 6, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 7, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 8, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{ ranking: 9, name: "ahmad", weekly: 123, monthly: 3423, alltime: 3454554 },
	{
		ranking: 10,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 11,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 12,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 13,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 14,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 15,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 16,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 17,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 18,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 19,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 20,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 21,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 22,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 23,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 24,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 25,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 26,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
	{
		ranking: 27,
		name: "ahmad",
		weekly: 123,
		monthly: 3423,
		alltime: 3454554,
	},
];

//! i want to make this only load 50 components at a time, maybe when i add a backend

const Leaderboard = () => {
	return (
		<div className="main">

			<Container>
				<TableContainer component={Paper}>
					<Table
						sx={{
							minWidth: 650,
							borderRadius: 50,
							border: `3px solid black`,
						}}
					>
						<TableHead>
							<TableRow sx={{ borderBottom: `3px solid black` }}>
								<TableCell sx={{ fontSize: `24px` }}>
									Rank
								</TableCell>
								<TableCell sx={{ fontSize: `24px` }}>
									Username
								</TableCell>
								<TableCell sx={{ fontSize: `24px` }}>
									Weekly
								</TableCell>
								<TableCell sx={{ fontSize: `24px` }}>
									Monthly
								</TableCell>
								<TableCell sx={{ fontSize: `24px` }}>
									AllTime
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									sx={{
										borderBottom: `2px solid black`,
										bgcolor:
											row.ranking === 1
												? "#d4af37"
												: row.ranking === 2
												? "#C0C0C0"
												: row.ranking === 3
												? "#CD7F32"
												: "white",
									}}
								>
									<TableCell sx={{ fontSize: `18px` }}>
										{row.ranking}
									</TableCell>
									<TableCell sx={{ fontSize: `18px` }}>
										{row.name}
									</TableCell>
									<TableCell sx={{ fontSize: `18px` }}>
										{row.weekly}
									</TableCell>
									<TableCell sx={{ fontSize: `18px` }}>
										{row.monthly}
									</TableCell>
									<TableCell sx={{ fontSize: `18px` }}>
										{row.alltime}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</div>
	);
};

export default Leaderboard;
