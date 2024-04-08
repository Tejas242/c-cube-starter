import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Button from "../src/components/Button";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 80%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
    /* It is making extra space on right side of webpage can you fix it*/
    width: 100%;
    overflow: hidden;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const ProjectTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 600;
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 1rem auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

const ProjectDescription = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

// Create a alternate dark and light sections for domainwise projects

const AppDev = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            <span className="text-1">App</span> Development
          </Title>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectInfo>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc odio, ultricies ac sapien a, fermentum tincidunt nulla.
            </ProjectDescription>
            <ButtonContainer>
              <Button>Contribute</Button>
            </ButtonContainer>
          </ProjectInfo>
        </Box>
        <Box>
          <ProjectImage src="https://source.unsplash.com/600x600/?app" />
        </Box>
      </Container>
    </Section>
  );
};

const WebDev = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            <span className="text-2">Web</span> Development
          </Title>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectInfo>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc odio, ultricies ac sapien a, fermentum tincidunt nulla.
            </ProjectDescription>
            <ButtonContainer>
              <Button>Contribute</Button>
            </ButtonContainer>
          </ProjectInfo>
        </Box>
        <Box>
          <ProjectImage src="https://source.unsplash.com/600x600/?web" />
        </Box>
      </Container>
    </Section>
  );
};

const ML = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            <span className="text-3">Machine Learning</span>
          </Title>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectInfo>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc odio, ultricies ac sapien a, fermentum tincidunt nulla.
            </ProjectDescription>
            <ButtonContainer>
              <Button>Contribute</Button>
            </ButtonContainer>
          </ProjectInfo>
        </Box>
        <Box>
          <ProjectImage src="https://source.unsplash.com/600x600/?ml" />
        </Box>
      </Container>
    </Section>
  );
};

const UIUX = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            <span className="text-1">UI/UX</span> Design
          </Title>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectInfo>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nunc odio, ultricies ac sapien a, fermentum tincidunt nulla.
            </ProjectDescription>
            <ButtonContainer>
              <Button>Contribute</Button>
            </ButtonContainer>
          </ProjectInfo>
        </Box>
        <Box>
          <ProjectImage src="https://source.unsplash.com/600x600/?ui" />
        </Box>
      </Container>
    </Section>
  );
};

const Projects = () => {
  return (
    <>
      <AppDev />
      <WebDev />
      <ML />
      <UIUX />
    </>
  );
};

const Contribute = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Projects />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
};

export default Contribute;
