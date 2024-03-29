import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";
import Calendar from "../../Icons/Calendar";
import upcoming from "../../assets/Upcoming-Event/upcoming.png";

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

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const EventTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 600;
`;

const EventInfo = styled.div`
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

const SubTextLocation = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
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
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
`;

const Upcoming = () => {
  return (
    <Section id="about">
      <Title>Upcoming</Title>
      <Container>
        <Box>
          <EventTitle>Inauguration Ceremony</EventTitle>
          <EventInfo>
            <SubText>
              30<sup>th</sup> March, 2024 <br /> 05:00 PM IST
            </SubText>
            <SubTextLocation>
              Electrical Seminar Hall, Govt. Engineering College, Aurangabad
              (Chh. Sambhajinagar)
            </SubTextLocation>
          </EventInfo>
          <SubTextLight>
            SPEAKER: <br />
            <strong>Mr. Satyam Avhad</strong> <br /> Hopify Technologies, Pune
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <a
                href="https://calendar.app.google/XpZXxu93D4kkHJGS8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  text="ADD TO CALENDAR"
                  link="https://calendar.app.google/XpZXxu93D4kkHJGS8"
                />
              </a>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
        <Box>
          <EventImage
            src={`${upcoming || "https://source.unsplash.com/random"}`}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default Upcoming;
