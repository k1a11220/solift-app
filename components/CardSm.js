import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: #f8f8f8;
  border-radius: 20px;
  margin-bottom: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px 16px 16px 26px;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.View`
  width: 60%;
`;

const Title = styled.Text`
  color: #717989;
  padding-bottom: 7px;
  overflow: hidden;
`;

const Subtitles = styled.Text`
  color: #4191fd;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
`;

const Thumbnail = styled.Image`
  width: 100px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const CardSm = ({ title, subtitles, id, thumbnail }) => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title numberOfLines={1}>{title}</Title>
          <Subtitles numberOfLines={1}>{subtitles}</Subtitles>
        </TextWrapper>
        <Thumbnail source={{ uri: thumbnail }} />
      </Wrapper>
    </Container>
  );
};

export default CardSm;
