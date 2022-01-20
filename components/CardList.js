import * as React from "react";
import styled from "styled-components/native";
import CardSm from "./CardSm";

const Container = styled.ScrollView``;

const CardList = () => {
  return (
    <Container>
      <CardSm />
      <CardSm />
      <CardSm />
      <CardSm />
      <CardSm />
      <CardSm />
      <CardSm />
      <CardSm />
    </Container>
  );
};

export default CardList;
