import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Product from "./components/Product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/productSlice";
import Chart from "./components/Chart";
import Table from "./components/Table";

const MainContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 15px 300px auto 15px;
	gap: 40px 15px;
	margin-top: 52px;
	padding-bottom: 30px;
`;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<>
			<Header />
			<MainContainer>
				<Product />
				<Chart />
				<Table />
			</MainContainer>
		</>
	);
}

export default App;
