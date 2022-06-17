import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body/Index";
import Home from "../components/Home/Index";
import { Wrap } from "../components/Home/style";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Index";
import Plant from "../components/Plant";
import Shop from "../components/Shop";
import Blogs from "../components/Blogs";
import Products from "../components/Products";

import { Categories } from "../mockDatas/mockCateg";
import { Container } from "./style";

export const Root = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/plant" element={<Plant />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/sidebar" element={<Sidebar />} />
            <Route path="/products/body" element={<Body />} />
            <Route path="/products/hello" element={<Body />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Root;
