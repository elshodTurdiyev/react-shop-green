import styled from "styled-components";

import mbf from "../../assets/imgs/main-big-flower.png";
import msf from "../../assets/imgs/main-small-flower.png";
import mf from "../../assets/imgs/main-flower.svg";

export const Container = styled.div`
  margin-top: 12px;
`;
export const Wrap = styled.div`
  width: 90%;
  /* background: #fbfb2b; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
Wrap.Left = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 40px;
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    /* align-items: start; */
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3d3d3d;
  }
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    color: #3d3d3d;
  }
  span {
    color: #46a358;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
  }
`;
Wrap.Right = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: start;
`;
export const ImageB = styled.img.attrs({
  src: mbf,
})`
  /* background-image: url(${(prop) => prop}); */
  /* background-image: url(${mbf}); */
  width: 518px;
  height: 518px;
`;
export const ImageS = styled.img.attrs({
  src: msf,
})`
  /* background-image: url(${msf}); */
  width: 135px;
  height: 135px;
  border: none;
  outline: none;
  margin-bottom: 37px;
`;
export const Button = styled.button`
  width: 140px;
  height: 40px;
  color: white;
  background: #46a358;
  border-radius: 6px;
  text-transform: uppercase;

  border: none;
  outline: none;
  user-select: none;
  :active {
    transform: scale(0.95);
  }
`;
export const Click = styled.div`
  position: absolute;
  bottom: 6%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Clicked = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background: rgba(70, 163, 88, 0.3);
  cursor: pointer;
  :active {
    transform: scale(0.95);
    background-color: green;
  }
`;
