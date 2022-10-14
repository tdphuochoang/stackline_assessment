import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { currentProduct } from "../redux/productSlice";

const Container = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 3;
	background: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const TopContainer = styled.div`
	text-align: center;
	padding: 20px 30px 0px 30px;
`;

const MiddleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	color: grey;
	padding: 5px 15px;
`;

const Image = styled.img`
	width: 70%;
`;
const Title = styled.h2`
	color: #454852;
`;
const Subtitle = styled.p`
	color: #bec7d4;
	font-size: 14px;
`;

const Tag = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 3px 15px;
`;

const Hr = styled.hr`
	height: 2px;
	background-color: #f6f8fa;
	border: none;
`;

const BottomContainer = styled.div``;

const Product = () => {
	const product = useSelector(currentProduct);
	return (
		<Container>
			<TopContainer>
				<Image src={product.image} alt={product.title} />
				<Title>{product.title}</Title>
				<Subtitle>{product.subtitle}</Subtitle>
			</TopContainer>
			<Hr />
			<MiddleContainer>
				{product.tags &&
					product.tags.map((item, index) => <Tag key={index}>{item}</Tag>)}
			</MiddleContainer>
			<Hr />
			<BottomContainer></BottomContainer>
		</Container>
	);
};

export default Product;
