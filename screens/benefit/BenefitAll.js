import { gql, useQuery } from "@apollo/client";
import React, { useCallback } from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import styled from "styled-components/native";
import CardList from "../../components/CardList";
import CardSm from "../../components/CardSm";
import TabIndicator from "../../components/navigation/TabIndicator";

const Container = styled.View``;

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

const BenefitAll = (props) => {
  const { loading, data } = useQuery(GET_BENEFIT);
  const { headerHeight } = props;
  const renderItem = useCallback(({ item }) => {
    return (
      <CardSm
        margin={true}
        key={item.id}
        id={item.id}
        title={item.name}
        subtitles={item.mainBenefit}
        thumbnail={item.thumbnail}
      />
    );
  }, []);
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <Container>
      {loading ? (
        <Text>로딩중</Text>
      ) : (
        <CardList data={data.benefits} isInside={true} />
      )}
    </Container>
  );
};

export default BenefitAll;
