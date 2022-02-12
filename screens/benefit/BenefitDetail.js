import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Text, View } from "react-native";

const GET_BENEFITS = gql`
  query getById($id: Int!) {
    getById(id: $id) {
      id
      name
      category
      location
      address
      summary
      thumbnail
      mainBenefit
      benefits
      conditions
      otherOpts
      dtlImgs
      dtlLink
      contactNb
      period
    }
  }
`;

const BenefitDetail = ({ route }) => {
  console.log(route);
  const { loading, data } = useQuery(GET_BENEFITS, {
    variables: { id: 1 },
  });

  if (loading) {
    return <Text>로딩중..</Text>;
  }

  return <Text>{data.name}asㅁㄴㅇㅁㄴㅇㅁㄴㅇd</Text>;
};

export default BenefitDetail;
