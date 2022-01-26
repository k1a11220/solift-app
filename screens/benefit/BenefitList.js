import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet, Text, Animated, Dimensions } from "react-native";
import CardSm from "../../components/CardSm";

const window = Dimensions.get("window");

function BenefitList(props) {
  const {
    data,
    headerHeight,
    tabBarHeight,
    tabRoute,
    listArrRef,
    isTabFocused,
  } = props;

  const renderItem = useCallback(({ item, index }) => {
    return (
      <CardSm
        title={item.name}
        subtitles={item.mainBenefit}
        id={item.id}
        thumbnail={item.thumbnail}
        margin={true}
      />
      //   <View
      //     style={{
      //       ...styles.itemContainer,
      //       backgroundColor: index % 2 === 0 ? "#587498" : "#E86850",
      //     }}
      //   >
      //     <Text style={styles.itemText}>{item.name}</Text>
      //   </View>
    );
  }, []);

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <View style={styles.rootContainer}>
      <Animated.FlatList
        ref={(ref) => {
          let foundIndex = listArrRef.current.findIndex(
            (e) => e.key === tabRoute.key
          );

          if (foundIndex === -1) {
            listArrRef.current.push({
              key: tabRoute.key,
              value: ref,
            });
          } else {
            listArrRef.current[foundIndex] = {
              key: tabRoute.key,
              value: ref,
            };
          }
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          paddingTop: headerHeight,
          minHeight: window.height + headerHeight - tabBarHeight,
        }}
        scrollEventThrottle={16}
        onScroll={
          isTabFocused
            ? Animated.event(
                [{ nativeEvent: { contentOffset: { y: props.scrollY } } }],
                { useNativeDriver: true }
              )
            : null
        }
        onMomentumScrollBegin={props.onMomentumScrollBegin}
        onMomentumScrollEnd={props.onMomentumScrollEnd}
        onScrollEndDrag={props.onScrollEndDrag}
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 25,
    color: "#FFD800",
  },
});

export default BenefitList;
