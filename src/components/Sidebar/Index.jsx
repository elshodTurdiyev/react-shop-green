import React from "react";
import { Container, Titles, Wrap } from "./style";
import { Categories } from "../../mockDatas/mockCateg";
import { NavLink, Route, Routes } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Container>
      <Wrap>
        <h2>Categories</h2>
        <Titles>
          {Categories.map((val) => {
            return (
              <Titles.Title key={val.id}>
                <NavLink to={"/products/" + val.id}>
                  <h4>{val.catName}</h4>
                </NavLink>
                <h4>({val.count})</h4>
              </Titles.Title>
            );
          })}
        </Titles>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
