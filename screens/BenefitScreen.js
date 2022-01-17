import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BenefitAll from "./benefit/BenefitAll";
import BenefitCulture from "./benefit/BenefitCulture";

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="전체" component={BenefitAll} />
      <Tab.Screen name="문화" component={BenefitCulture} />
    </Tab.Navigator>
  );
}

const BenefitScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Tabs />
      </View>
    </>
  );
};

export default BenefitScreen;
