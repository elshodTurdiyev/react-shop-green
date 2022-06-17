import React from "react";
import { Container, Navbar } from "./style";
import { NavLink, Outlet } from "react-router-dom";

import Logo from "../../assets/imgs/logoG.png";

export const GNavbar = () => {
  const active = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "400",
      paddingBottom: isActive ? "25px" : "0px",
      borderBottom: isActive ? "3px solid #46a358" : "none",
      color: isActive ? "green" : "#3d3d3d",
      // transition: "0.5s",
      textDecoration: "none",
    };
  };

  return (
    <>
      <Container>
        <Navbar>
          <Navbar.Items>
            <Navbar.Logo src={Logo} alt="imgLogo" />
          </Navbar.Items>
          <Navbar.Items>
            <Navbar.Item>
              <NavLink style={active} to={"/"}>
                Home
              </NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink style={active} to={"/shop"}>
                Shop
              </NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink style={active} to={"/plant"}>
                Plant Care
              </NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink style={active} to={"/blogs"}>
                Blogs
              </NavLink>
            </Navbar.Item>
          </Navbar.Items>
          {/* <Navbar.Items> */}
          <Navbar.Log>
            <Navbar.ISearch />
            <Navbar.IDownload />

            <Navbar.Button>
              {/* <Navbar.ILogout /> */}
              <p>Login</p>
            </Navbar.Button>
          </Navbar.Log>
          {/* </Navbar.Items> */}
        </Navbar>
      </Container>
      <Outlet />
    </>
  );
};

export default GNavbar;
