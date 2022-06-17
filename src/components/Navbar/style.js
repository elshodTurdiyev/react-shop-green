import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as download } from "../../assets/icons/Download.svg";
import { ReactComponent as logout } from "../../assets/icons/logout.svg";

export const Container = styled.div`
  background-color: white;
  color: #3d3d3d;
`;

export const Navbar = styled.div`
  width: 90%;
  height: 80px;
  /* border: 1px solid #34abc1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background: #fff;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5); ;
`;

Navbar.Items = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Navbar.Logo = styled.img``;
Navbar.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
`;
Navbar.Log = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex: 1; */
`;

Navbar.Button = styled.button`
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  border: none;
  :active {
    transform: scale(0.97);
  }
`;
Navbar.ISearch = styled(search)``;
Navbar.IDownload = styled(download)``;
Navbar.ILogout = styled(logout)``;
