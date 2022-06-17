import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
`;
export const Wrap = styled.div`
  width: 310px;
  /* height: 774px; */
  background: #fbfb2b;
  padding: 20px 20px;
  padding-bottom: 0;
  background: #fbfbfb;
`;

export const Titles = styled.div`
  padding: 20px 30px;
`;

Titles.Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 40px;
  color: #3d3d3d;
  :hover {
    color: #46a358;
    font-weight: 700;
    cursor: pointer;
  }
`;
