import * as React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  background-color: #f8f8f8;
  border-radius: 20px;
  margin: ${(props) => (props.margin ? "0 24px 16px 24px" : "0 0 16px 0")};
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px 16px 16px 26px;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

const TextWrapper = styled.View`
  width: 60%;
`;

const Title = styled.Text`
  color: #717989;
  padding-bottom: 7px;
`;

const Subtitles = styled.Text`
  color: #4191fd;
  font-size: 16px;
  font-weight: 600;
`;

const Thumbnail = styled.Image`
  width: 100px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;

const CardSm = ({ title, subtitles, id, thumbnail, margin, onPress }) => {
  return (
    <Container margin={margin} onPress={onPress}>
      <View style={styles.wrapper}>
        <TextWrapper>
          <Title numberOfLines={1}>{title}</Title>
          <Subtitles numberOfLines={1}>{subtitles}</Subtitles>
        </TextWrapper>
        <Thumbnail source={{ uri: thumbnail }} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    paddingStart: 26,
    paddingEnd: 16,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
  },
});

export default CardSm;
