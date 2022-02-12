import React, { useCallback, useEffect, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { TabView } from "react-native-tab-view";
import Tab from "./Tab";
import styled from "styled-components/native";

const TabWrapper = styled.ScrollView`
  flex-direction: row;
`;

const BottomLine = styled.View`
  background-color: #2a364e;
  height: 2px;
  width: 100%;
`;

const TabIndicator = ({
  tabIndex,
  tabRoutes,
  renderScene,
  onIndexChange,
  navigation,
  onTabPress,
  tabBarTranslateY,
}) => {
  const renderTabBar = useCallback((props) => {
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
    }, [props.navigationState, translateValue, toValue]);
    return (
      <Animated.View
        style={[
          styles.collapsibleTabBar,
          { transform: [{ translateY: tabBarTranslateY }] },
        ]}
      >
        <TabWrapper
          contentContainerStyle={{ flexGrow: 1, alignItems: "flex-end" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {props.navigationState.routes.map((route, idx) => {
            const label = route.title;
            const isFocused = route.key === tabRoutes[tabIndex].key;
            return (
              <Tab
                isFocused={isFocused}
                key={`tab_${idx}`}
                label={label}
                onTabPress={onTabPress}
                idx={idx}
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
      </Animated.View>
    );
  });

  return (
    <TabView
      navigationState={{ index: tabIndex, routes: tabRoutes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    position: "absolute",
    width: "100%",
  },
  collapsibleTabBar: {
    justifyContent: "flex-end",
    height: 60,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    paddingLeft: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F3F5",
  },
  collapsibleTabBarButton: {
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#2a364e",
  },
  collapsibleTabBarLabelContainer: {
    paddingTop: 24,
    alignItems: "flex-start",
    height: "100%",
  },
  collapsibleTabBarLabelText: {
    fontSize: 18,
    color: "#CCCFD4",
  },
});

export default TabIndicator;
