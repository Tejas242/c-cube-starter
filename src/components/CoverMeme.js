import React from "react";
import styled from "styled-components";
import homeI from "../assets/hero_image.jpg";

const MemeContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverMeme = () => {
  return (
    <MemeContainer>
      <img
        // src={"https://randommeme-five.vercel.app/"}
        src={homeI}
        type="image/png"
        alt="dev meme"
        height={400}
      />
    </MemeContainer>
  );
};

export default CoverMeme;
