import * as React from "react";
import { View } from "react-native";
import styled from "styled-components";
import CardList from "../../components/cardList";

const Container = styled.View`
  padding: 0 4%;
  background-color: #ffffff;
`;

const BenefitAll = () => {
  return (
    <Container>
      <CardList />
    </Container>
  );
};

export default BenefitAll;
