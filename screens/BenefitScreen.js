import * as React from "react";
import styled from "styled-components/native";
import TabIndicator from "../components/navigation/TabIndicator";
import { Title } from "../styles/styles";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #ffffff;
`;

const BenefitScreen = () => {
  return (
    <Container>
      <Title>혜택</Title>
      <TabIndicator />
    </Container>
  );
};

export default BenefitScreen;
