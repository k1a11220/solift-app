import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
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

const CardSm = ({ title, subtitles, id, thumbnail, margin }) => {
  return (
    <Container margin={margin}>
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
