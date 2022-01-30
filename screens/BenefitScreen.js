import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import CollapsibleTabview from "../components/CollapsibleTabview";

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

const LoadingData = new Array(10).fill(0);

function BenefitScreen() {
  const { loading, data } = useQuery(GET_BENEFIT);
  const [tabRoutes, setTabRoutes] = useState([
    { key: "screen1", title: "전체" },
    { key: "screen2", title: "문화" },
    { key: "screen3", title: "식당" },
    { key: "screen4", title: "여행&액티비티" },
  ]);
  return (
    <>
      {data === undefined ? (
        <Text>로딩중</Text>
      ) : (
        <CollapsibleTabview tabRoutes={tabRoutes} data={data.benefits} />
      )}
    </>
  );
}

export default BenefitScreen;
