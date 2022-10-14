import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { currentProduct } from "../redux/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	grid-column: 3 / 4;
	grid-row: 2 / 3;
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const TableContainer = styled.table`
	width: 100%;
	text-align: center;
	border-collapse: collapse;

	th {
		color: #687486;
		font-weight: 500;
		padding: 20px;
		cursor: pointer;
		transition: all 0.5s ease;

		:hover {
			background-color: #f2f2f2;
		}
	}

	tbody {
		tr {
			border-top: 1px solid rgba(0, 0, 0, 0.1);
		}

		td {
			color: #aaafbd;
			padding: 12px;
		}
	}
`;

const Table = () => {
	const [sortBy, setSortBy] = useState("weekEnding");

	const salesSectionName = [
		["WEEK ENDING", "weekEnding"],
		["RETAIL SALES", "retailSales"],
		["WHOLESALE SALES", "wholesaleSales"],
		["UNITS SOLD", "unitsSold"],
		["RETAILER MARGIN", "retailerMargin"],
	];
	const product = useSelector(currentProduct);

	//Re-format date to MM-DD-YY
	const dateFormat = (date) => {
		const dateSplit = date.split("-");
		const year = dateSplit[0].slice(2);
		return `${dateSplit[1]}-${dateSplit[2]}-${year}`;
	};

	//Currency formatter
	const currencyFormat = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});

	const sortTable = (str) => {
		let temp = [...str];
		return temp.sort((a, b) => {
			if (a[sortBy] === b[sortBy]) {
				return 0;
			} else if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return -1;
		});
	};
	return (
		<Container>
			<TableContainer>
				<thead>
					<tr>
						{salesSectionName.map((section, index) => (
							<th key={index} onClick={() => setSortBy(section[1])}>
								<span>
									{section[0]}
									<FontAwesomeIcon
										style={{ marginLeft: "10px", color: "#aaafbd" }}
										icon={faChevronDown}
									/>
								</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{product.sales &&
						sortTable(product.sales).map((item, index) => (
							<tr key={index}>
								<td>{dateFormat(item.weekEnding)}</td>
								<td>{currencyFormat.format(item.retailSales)}</td>
								<td>{currencyFormat.format(item.wholesaleSales)}</td>
								<td>{item.unitsSold}</td>
								<td>{currencyFormat.format(item.retailerMargin)}</td>
							</tr>
						))}
				</tbody>
			</TableContainer>
		</Container>
	);
};

export default Table;
