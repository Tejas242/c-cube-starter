import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
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
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
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

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;

  @media (max-width: 64em) {
    width: 100%;
    justify-content: center;
    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            Welcome To <br /> C<sup>3</sup>.
          </Title>
          <SubText>
            c<sup>3</sup> (c-cube) is a coding club at Govt. Engineering
            College, Chh. Sambhajinagar. Our community brings together students
            passionate about programming to learn, create, and innovate through
            code.
          </SubText>
          <SubTextLight>
            With expertise spanning languages, frameworks, and emerging
            technologies, c<sup>3</sup> offers a diverse coding environment.
            It's free and open to all students interested in coding. Join our
            collective to attend workshops, collaborate on projects, and be part
            of the coding movement. Grow your skills, network with peers, and
            unlock your potential.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <a
                href="https://discord.com/invite/yEW8j9S5"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  text="Join Our Discord"
                  link="https://discord.com/invite/yEW8j9S5"
                />
              </a>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
