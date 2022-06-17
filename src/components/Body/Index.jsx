import React, { useState } from "react";
import { Card, Container, Header, Main, Title, Wrap } from "./style";
import Flower1 from "../../assets/imgs/m1.png";
import { data } from "../../mockDatas/flowers";
import { title } from "../../mockDatas/mockTitle";
import { NavLink } from "react-router-dom";

export const Body = () => {
  const [status, setStatus] = useState("all");

  const onStatus = () => {
    // console.log(status);
    // setStatus(status);
  };

  return (
    <Container>
      <Wrap>
        <Header>
          <Header.Nav>
            {title.map((val) => {
              return (
                // <NavLink to={"/body"}>
                <Title onClick={onStatus} key={val.id}>
                  {val.title}
                </Title>
                //* </NavLink> *//
              );
            })}
          </Header.Nav>
          <Header.Sort>
            <p>Short by: Defaault sorting </p>
          </Header.Sort>
        </Header>
        <Main>
          {data
            .filter((value) => status == value.status)
            .map((value) => {
              return (
                <Card key={value.id} status={value.status}>
                  <Card.Image src={value.img} alt="cardImg" />
                  <Card.Titles>
                    <Card.Title>
                      <h3>{value.name}</h3>
                      <h2>$ {value.price}</h2>
                    </Card.Title>
                  </Card.Titles>
                </Card>
              );
            })}
          <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card>
          {/* <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card>
          <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card>
          <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card>
          <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card>
          <Card>
            <Card.Image src={Flower1} alt="cardImg" />
            <Card.Titles>
              <Card.Title>
                <h3>Barberton Daisy</h3>
                <h2>$119.99</h2>
              </Card.Title>
            </Card.Titles>
          </Card> */}
        </Main>
      </Wrap>
    </Container>
  );
};

export default Body;
