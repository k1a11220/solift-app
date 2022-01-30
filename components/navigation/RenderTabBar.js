import React, { useCallback } from "react";
import { Animated, StyleSheet } from "react-native";

export const renderTabBar = useCallback(
  (props) => {
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
  },
  [headerHeight]
);

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
    height: TABBAR_HEIGHT,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    paddingLeft: 24,
    borderBottomColor: "#F2F3F5",
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
