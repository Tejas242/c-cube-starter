import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburguerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const IconList = styled.div`
  width: 80%;
  display: flex;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 64em) {
    width: 100%;
    justify-content: center;
    button {
      margin: 0 auto;
    }
  }
`;
// add a bouncing animation to the SpecialLink component

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: scale(1);
  }
  40% {
    transform: translateY(1.3);
  }
  60% {
    transform: translateY(1.1);
  }
`;

const SpecialLink = styled.a`
  background: linear-gradient(90deg, #ff8a00 0%, #e52e71 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${bounce} 2s infinite;
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburguerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburguerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem><SpecialLink href="https://c3-oss.vercel.app">Contribute</SpecialLink></MenuItem>
          {/* <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem> */}
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
          <MenuItem>
            <div className="mobile">
              <IconList>
                <a
                  href="https://discord.com/invite/BhXNWdT3Fx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord size={"24"} />
                </a>
                {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a> */}
                <a
                  href="https://www.instagram.com/ccube_community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={"24"} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={"24"} />
                </a>
                <a
                  href="https://www.linkedin.com/company/101699745/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"24"} />
                </a>
              </IconList>
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          {/* <a
            href="https://discord.com/invite/yEW8j9S5"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button text="Join Us" link="https://discord.com/invite/yEW8j9S5" />
          </a> */}
          <IconList>
            <a
              href="https://discord.com/invite/BhXNWdT3Fx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={"24"} />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a> */}
            <a
              href="https://www.instagram.com/ccube_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={"24"} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={"24"} />
            </a>
            <a
              href="https://www.linkedin.com/company/101699745/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={"24"} />
            </a>
          </IconList>
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
