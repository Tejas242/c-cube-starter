import React from "react";
import styled from "styled-components";

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
        src={"https://randommeme-five.vercel.app/"}
        type="image/png"
        alt="dev meme"
        height={"400px"}
      />
    </MemeContainer>
  );
};

export default CoverMeme;
