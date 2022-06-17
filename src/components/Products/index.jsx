import React from "react";
import Body from "../Body/Index";
import Sidebar from "../Sidebar/Index";
import { Container } from "./style";

export const Products = () => {
  return (
    <Container>
      <Sidebar />
      <Body />
    </Container>
  );
};

export default Products;
