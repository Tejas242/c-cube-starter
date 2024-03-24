import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Logo = () => {
  return (
    <LogoText>
      <LogoLink to="/">
        {logo ? (
          <LogoImg src={logo} alt="logo" />
        ) : (
          <span>
            C<sup>3</sup>
          </span>
        )}
      </LogoLink>
    </LogoText>
  );
};

export default Logo;
