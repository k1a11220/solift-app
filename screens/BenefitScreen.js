import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
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

function BenefitScreen() {
  const { loading, data } = useQuery(GET_BENEFIT);
  const [tabRoutes, setTabRoutes] = useState([
    { key: "screen1", title: "전체" },
    { key: "screen2", title: "문화" },
    { key: "screen3", title: "여행" },
  ]);

  return <CollapsibleTabview tabRoutes={tabRoutes} data={data.benefits} />;
}

export default BenefitScreen;
