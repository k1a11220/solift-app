import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import CardList from "../../components/CardList";

const Container = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
`;

const GET_BENEFIT = gql`
  {
    benefits {
      id
      name
      mainBenefit
      thumbnail
    }
  }
`;

const BenefitAll = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  return (
    <Container>
      {loading ? (
        <Text>로딩중</Text>
      ) : (
        <CardList data={data.benefits} isInside={false} />
      )}
    </Container>
  );
};

export default BenefitAll;
