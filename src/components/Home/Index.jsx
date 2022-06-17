import React from "react";
import Body from "../Body/Index";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/Index";

import {
  Button,
  Container,
  Wrap,
  ImageB,
  ImageS,
  Clicked,
  Click,
  Navs,
} from "./style";

// import mf1 from "../../assets/imgs/main-flower.svg";

export const Home = () => {
  return (
    <>
      <Container>
        {/* <Navbar /> */}
        <Wrap>
          <Wrap.Left>
            <h4>Welcome to GreenShop</h4>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button>Shop Now</Button>
          </Wrap.Left>

          <Wrap.Right>
            <ImageS />
            <ImageB type="../../assets/imgs/main-flower.svg" />
          </Wrap.Right>
        </Wrap>
        <Click>
          <Clicked />
          <Clicked />
          <Clicked />
        </Click>
      </Container>
      <Navs>
        <Sidebar />
        <Body />
      </Navs>
    </>
  );
};

export default Home;
