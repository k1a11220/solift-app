import React, { useCallback, useRef, useState, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import BenefitList from "../screens/benefit/BenefitList";
import { Header, Title } from "../styles/styles";
import TabIndicator from "./navigation/TabIndicator";

const TABBAR_HEIGHT = 60;

const CollapsibleTabview = ({ tabRoutes, data, navigation }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const tabIndexRef = useRef(0);
  const isListGlidingRef = useRef(false);
  const listArrRef = useRef([]);
  const listOffsetRef = useRef({});

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  const tabBarTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [headerHeight, 0],
    extrapolateRight: "clamp",
  });

  useEffect(() => {
    scrollY.addListener(({ value }) => {});

    return () => {
      scrollY.removeListener();
    };
  }, []);

  const headerOnLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);

  const onTabIndexChange = useCallback((id) => {
    setTabIndex(id);
    tabIndexRef.current = id;
  }, []);

  const onTabPress = useCallback((idx) => {
    if (!isListGlidingRef.current) {
      setTabIndex(idx);
      tabIndexRef.current = idx;
    }
  }, []);

  const syncScrollOffset = () => {
    const focusedTabKey = tabRoutes[tabIndexRef.current].key;

    listArrRef.current.forEach((item) => {
      if (item.key !== focusedTabKey) {
        if (scrollY._value < headerHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });
            listOffsetRef.current[item.key] = scrollY._value;
          }
        } else if (scrollY._value >= headerHeight) {
          if (
            listOffsetRef.current[item.key] < headerHeight ||
            listOffsetRef.current[item.key] === null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: headerHeight,
                aniamted: false,
              });
              listOffsetRef.current[item.key] = headerHeight;
            }
          }
        }
      } else {
        if (item.value) {
          listOffsetRef.current[item.key] = scrollY._value;
        }
      }
    });
  };

  const onMomentumScrollBegin = useCallback(() => {
    isListGlidingRef.current = true;
  }, []);
  const onMomentumScrollEnd = useCallback(() => {
    isListGlidingRef.current = false;
    syncScrollOffset();
  }, [headerHeight]);
  const onScrollEndDrag = useCallback(() => {
    syncScrollOffset();
  }, [headerHeight]);

  const renderScene = useCallback(
    ({ route }) => {
      const isFocused = route.key === tabRoutes[tabIndex].key;

      return (
        <>
          <BenefitList
            headerHeight={headerHeight}
            tabBarHeight={TABBAR_HEIGHT}
            scrollY={scrollY}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onScrollEndDrag={onScrollEndDrag}
            tabRoute={route}
            listArrRef={listArrRef}
            isTabFocused={isFocused}
            data={data}
            navigation={navigation}
          />
        </>
      );
    },
    [headerHeight, tabIndex]
  );
  return (
    <View style={styles.rootContainer}>
      {headerHeight > 0 ? (
        <TabIndicator
          tabIndex={tabIndex}
          tabRoutes={tabRoutes}
          renderScene={renderScene}
          onIndexChange={onTabIndexChange}
          onTabPress={onTabPress}
          navigation={navigation}
          tabBarTranslateY={tabBarTranslateY}
        />
      ) : null}
      <Animated.View
        style={{
          ...styles.headerContainer,
          transform: [{ translateY: headerTranslateY }],
        }}
        onLayout={headerOnLayout}
        pointerEvents="box-none"
      >
        <Header>
          <Title>혜택</Title>
        </Header>
      </Animated.View>
    </View>
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
    height: TABBAR_HEIGHT,
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
  gap: {
    width: "100%",
    height: 26,
  },
});

export default CollapsibleTabview;
