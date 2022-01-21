import * as React from "react";
import styled from "styled-components/native";
import CardSm from "./CardSm";

const Container = styled.FlatList`
  padding-top: 26px;
  padding-bottom: 26px;
`;

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
          showsVerticalScrollIndicator={false}
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
