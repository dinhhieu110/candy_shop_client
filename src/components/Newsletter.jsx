import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #fcf6f5;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 30px;
  font-size: 26px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  color: #fff;
  background-color: #058081;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input type="text" placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
