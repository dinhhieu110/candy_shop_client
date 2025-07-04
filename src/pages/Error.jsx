import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../utilities/responsive";
import { Height } from "@mui/icons-material";

const Container = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 50vw;
  height: 100vh;
  ${mobile({ width: "100%", height: "50vh" })}
`;
const Error = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ImageContainer>
        <Image src="./images/error.png"></Image>
      </ImageContainer>
    </Container>
  );
};

export default Error;
