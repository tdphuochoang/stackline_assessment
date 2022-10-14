import React from "react";
import styled from "styled-components";
import logo from "./images/stackline_logo.svg";

const Container = styled.div`
	height: 70px;
	background-color: #052849;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	padding-left: 30px;
`;

const LogoContainer = styled.a`
	display: block;
	width: 150px;
	height: 30px;
`;

const Logo = styled.img`
	width: 100%;
	height: 100%;
`;

const Header = () => {
	return (
		<Container>
			<LogoContainer href="#">
				<Logo src={logo} alt="Stackline logo" />
			</LogoContainer>
		</Container>
	);
};

export default Header;
