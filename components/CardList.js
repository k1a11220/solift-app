import * as React from "react";
import styled from "styled-components";
import CardSm from "./CardSm";

const Container = styled.ScrollView``;

const CardList = () => {
  return (
    <Container
      contentContainerStyle={{
        paddingBottom: "25px",
      }}
    >
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
