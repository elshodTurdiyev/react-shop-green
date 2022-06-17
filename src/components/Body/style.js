import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Wrap = styled.div`
  /* width: 100%; */
  padding: 20px 30px;
  /* background: #fbfb4b; */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Header.Nav = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  background: transparent;
  padding-bottom: 10px;
  :focus {
    color: #46a358;
    font-weight: 700;
    border-bottom: 3px solid #46a358;
  }
`;
Header.Sort = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 30px 10px;
  :hover {
    transform: scale(0.97);
    box-shadow: 4px 4px 12px 0px rgba(8, 28, 115, 0.65);
    transition: 0.5s;
  }
`;

Card.Image = styled.img`
  width: 250px;
  height: 250px;
  background: #444;
  /* background: url(image.png); */
  mix-blend-mode: multiply;
`;
Card.Titles = styled.div``;
Card.Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  h3 {
    padding-top: 30px;
    padding-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3d3d3d;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #46a358;
  }
`;
