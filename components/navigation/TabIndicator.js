import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import BenefitAll from "../../screens/benefit/BenefitAll";
import BenefitCulture from "../../screens/benefit/BenefitCulture";
import TabBar from "./TabBar";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="전체" component={BenefitAll} />
      <Tab.Screen name="문화" component={BenefitCulture} />
    </Tab.Navigator>
  );
};

const TabIndicator = () => {
  return <Tabs />;
};

export default TabIndicator;
