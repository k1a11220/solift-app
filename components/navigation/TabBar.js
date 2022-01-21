import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import Tab from "./Tab";

const Container = styled.View`
  border: 1px solid #f2f3f5;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  padding-left: 24px;
  margin-top: 24px;
`;

const BottomLine = styled.View`
  background-color: #2a364e;
  height: 2px;
  width: 100%;
`;

const TabBar = ({ state, descriptors, navigation }) => {
  const [translateValue] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [state, translateValue, toValue]);

  return (
    <Container>
      <TabWrapper>
        {state.routes.map((route, index) => {
          // const {options} = descriptors[route.key];
          // const label = options.tabBarLabel;
          const label = route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <Tab
              isFocused={isFocused}
              key={`tab_${index}`}
              label={label}
              onPress={onPress}
              setToValue={setToValue}
              setWidth={setWidth}
            />
          );
        })}
      </TabWrapper>
      <BottomLine
        as={Animated.View}
        style={{
          transform: [{ translateX: translateValue }],
          width,
        }}
      />
    </Container>
  );
};

export default TabBar;
