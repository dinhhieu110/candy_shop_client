import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 40vh;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
`;
const Button = styled.button`
  border: none;
  padding: 15px 25px;
  /* border-radius: 20px; */
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

const CategoryCard = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryCard;
