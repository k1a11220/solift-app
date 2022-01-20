import * as React from "react";
import styled from "styled-components/native";
import CardList from "../../components/CardList";

const Container = styled.View`
  padding-left: 24px;
  padding-right: 24px;
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
