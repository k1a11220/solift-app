import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Animated, StyleSheet } from "react-native";
import { TabView } from "react-native-tab-view";

const TABBAR_HEIGHT = 60;

const TabIndicator = ({
  tabIndex,
  tabRoutes,
  renderScene,
  onIndexChange,
  onTabPress,
  tabBarTranslateY,
}) => {
  const renderTabBar = useCallback((props) => {
    return (
      <Animated.View
        style={[
          styles.collapsibleTabBar,
          { transform: [{ translateY: tabBarTranslateY }] },
        ]}
      >
        {props.navigationState.routes.map((route, idx) => {
          return (
            <TouchableOpacity
              style={styles.collapsibleTabBarButton}
              key={idx}
              onPress={() => {
                onTabPress(idx);
              }}
            >
              <View style={styles.collapsibleTabBarLabelContainer}>
                <Text style={styles.collapsibleTabBarLabelText}>
                  {route.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
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
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    paddingLeft: 24,
  },
  collapsibleTabBarButton: {
    paddingRight: 20,
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
