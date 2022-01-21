import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  border: 1px solid #f2f3f5;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  padding-left: 24px;
  margin-top: 24px;
`;

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-right: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? "#2A364E" : "transparent"};
`;

const TabText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.isFocused ? "#2A364E" : "#CCCFD4")};
`;

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      <TabWrapper>
        {state.routes.map((route, index) => {
          // const {options} = descriptors[route.key];
          // const label = options.tabBarLabel;
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              key={`tab_${index}`}
            >
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          );
        })}
      </TabWrapper>
    </Container>
  );
};

export default TabBar;
