import React from "react";
import styled from "styled-components";
import {
	LineChart,
	ResponsiveContainer,
	Tooltip,
	Line,
	XAxis,
	YAxis,
} from "recharts";
import { useSelector } from "react-redux";
import { currentProduct } from "../redux/productSlice";

const Container = styled.div`
	grid-column: 3 / 4;
	grid-row: 1 / 2;
	background-color: #fff;
	padding-bottom: 20px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
	color: #687486;
	font-weight: 500;
	padding-left: 30px;
	font-size: 17px;
`;

const Chart = () => {
	const product = useSelector(currentProduct);

	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const labelConverter = (label) => {
		const labelArr = label.toString().split("-");
		return months[parseInt(labelArr[1] - 1)];
	};

	return (
		<Container>
			<Title>Retail Sales</Title>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={product.sales} margin={{ right: 30, left: 30 }}>
					<XAxis
						stroke="#C9CAD2"
						dataKey="weekEnding"
						git
						tickLine={false}
						tick={{ fill: "#AAAFBD" }}
						tickFormatter={labelConverter}
						minTickGap={70}
						dy={10}
					/>
					<Tooltip />
					<YAxis hide domain={["dataMin-1000000", "dataMax+1000000"]} />
					<Line
						type="monotone"
						dataKey="retailSales"
						strokeWidth={4}
						stroke="#3DA4F6"
						dot={false}
					/>
					<Line
						type="monotone"
						dataKey="wholesaleSales"
						strokeWidth={4}
						stroke="#96A2BC"
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Container>
	);
};

export default Chart;
