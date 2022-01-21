import styled from "styled-components/native";

export const Header = styled.View`
  min-height: ${(props) => (props.button === true ? "0" : "170px")};
`;

export const Title = styled.Text`
  padding-top: ${(props) => (props.button === true ? "36px" : "44px")};
  padding-bottom: 38px;
  font-size: 24px;
  color: #2a364e;
  font-weight: 700;
  padding-left: 24px;
`;
