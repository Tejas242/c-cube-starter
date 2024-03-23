import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="WHO CAN JOIN C^3?">
            c^3 is open to all students interested in coding, regardless of skill level or major.
          </Accordion>
          <Accordion title="DO I NEED PRIOR CODING EXPERIENCE?">
            Not at all! c^3 welcomes beginners and provides resources to help you get started with coding.
          </Accordion>
          <Accordion title="WHAT KIND OF ACTIVITIES DOES C^3 ORGANIZE?">
            We host workshops, coding challenges, hackathons, tech talks, project collaborations, and more.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW OFTEN DOES C^3 MEET?">
            Our club meets weekly, but we also have regular study groups, project teams, and socials.
          </Accordion>
          <Accordion title="DO I NEED TO BE A COMPUTER SCIENCE MAJOR?">
            Absolutely not! c^3 is for anyone interested in coding, regardless of their major.
          </Accordion>
          <Accordion title="HOW CAN I GET INVOLVED WITH C^3?">
            Attend our next club meeting, check out our website or discord community for upcoming events, or reach out to the club leaders!
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
