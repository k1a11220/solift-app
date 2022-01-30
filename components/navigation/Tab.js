import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-right: 20px;
`;

const TabText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.isFocused ? "#2A364E" : "#CCCFD4")};
`;

export default function Tab({
  isFocused,
  label,
  onPress,
  onTabPress,
  setToValue,
  setWidth,
  idx,
}) {
  const [layout, setLayout] = useState(null);
  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x);
      setWidth(layout.width);
    }
  }, [isFocused, layout, setToValue, setWidth]);

  const onLayout = (e) => {
    const { x, width } = e.nativeEvent.layout;
    setLayout({ x, width });
  };

  return (
    <TabButton
      isFocused={isFocused}
      onPress={() => {
        onTabPress(idx);
      }}
      onLayout={onLayout}
    >
      <TabText isFocused={isFocused}>{label}</TabText>
    </TabButton>
  );
}
