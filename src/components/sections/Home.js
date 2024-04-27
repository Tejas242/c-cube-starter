import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverMeme from "../CoverMeme";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    &>*: first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverMeme />
        </Box>

        {/* <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundTextBlack} alt="NFT"></img>
        </Round> */}
      </Container>
    </Section>
  );
};

export default Home;
