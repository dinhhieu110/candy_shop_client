import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data/popularProducts";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </Container>
  );
};

export default Products;
