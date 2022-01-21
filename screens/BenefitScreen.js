import * as React from "react";
import styled from "styled-components/native";
import TabIndicator from "../components/navigation/TabIndicator";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #ffffff;
`;

const BenefitScreen = () => {
  return (
    <Container>
      <TabIndicator />
    </Container>
  );
};

export default BenefitScreen;
