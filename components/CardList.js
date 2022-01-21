import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import CardSm from "./CardSm";

const Container = styled.FlatList``;

const getList = ({ item }) => {
  return (
    <CardSm
      key={item.id}
      id={item.id}
      title={item.name}
      subtitles={item.mainBenefit}
      thumbnail={item.thumbnail}
    />
  );
};

const CardList = ({ data, isInside }) => {
  return (
    <>
      {isInside ? (
        <>{getList(data)}</>
      ) : (
        <Container
          data={data}
          renderItem={getList}
          keyExtractor={(item) => String(item.id)}
          onEndReachedThreshold={0.8}
          // ListHeaderComponent={() => <Text>Header</Text>}
          // columnWrapperStyle={styles.imageRow}
          // numColumns={2}
        />
      )}
    </>
  );
};

export default CardList;
