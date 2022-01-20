import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import { View, Text } from "react-native";

const GET_BENEFIT = gql`
  {
    recommendedBenefit {
      id
      name
      mainBenefit
      thumbnail
    }
  }
`;

const HomeScreen = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  console.log(data.recommendedBenefit);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>홈</Text>
      {data.recommendedBenefit.map((data) => (
        <Text>{data.mainBenefit}</Text>
      ))}
    </View>
  );
};

export default HomeScreen;
