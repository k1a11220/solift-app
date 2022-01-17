import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 92px;
  background-color: #f8f8f8;
  border-radius: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px 16px 16px 26px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: #717989;
  padding-bottom: 7px;
`;

const Subtitles = styled.Text`
  color: #4191fd;
  font-size: 16px;
  font-weight: 500;
`;

const Thumbnail = styled.View`
  width: 100px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;

const CardSm = () => {
  return (
    <Container>
      <Wrapper>
        <View>
          <Title>롯데시네마</Title>
          <Subtitles>2D영화 최대 3천원 할인</Subtitles>
        </View>
        <Thumbnail />
      </Wrapper>
    </Container>
  );
};

export default CardSm;
