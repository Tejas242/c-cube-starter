import React from "react";
import styled from "styled-components";

// import ConfettiComponent from "../Confetti";
import { members, mentors } from "../../utils/team.js";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

// Define a mapping between platform names and icons
const socialIcons = {
  github: FaGithub,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  dribbble: FaDribbble,
};

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const MentorsContainer = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const TeamContainer = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 20px;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
`;

const MemberComponent = ({
  img,
  name = " ",
  position = " ",
  socialLinks = {},
}) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <SocialLinks>
        {Object.keys(socialLinks).map((platform, index) => {
          const IconComponent = socialIcons[platform];
          if (IconComponent) {
            return (
              <a
                key={index}
                href={socialLinks[platform]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent />
              </a>
            );
          }
          return null; // Return null for platforms without icons
        })}
      </SocialLinks>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Mentors</Title>
      {/* <ConfettiComponent /> */}
      <MentorsContainer>
        {mentors.map((mentor, index) => (
          <MemberComponent
            key={index}
            img={mentor.img}
            name={mentor.name}
            position={mentor.position}
          />
        ))}
      </MentorsContainer>
      <Title>Team</Title>
      <TeamContainer>
        {members.map((member, index) => (
          <MemberComponent
            key={index}
            img={member.img}
            name={member.name}
            position={member.position}
            socialLinks={member.socialLinks}
          />
        ))}
      </TeamContainer>
    </Section>
  );
};

export default Team;
