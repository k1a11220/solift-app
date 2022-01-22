import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export default function ExploreIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 25 25"
      {...props}
    >
      <G
        id="Iconly_Bold_Discovery"
        data-name="Iconly/Bold/Discovery"
        transform="translate(-2 -2)"
      >
        <G id="Discovery" transform="translate(2 2)">
          <Path
            id="패스_7712"
            data-name="패스 7712"
            d="M5.118,1.93A11.5,11.5,0,1,1,.872,15.882,11.528,11.528,0,0,1,5.118,1.93ZM15.525,7.186a.636.636,0,0,0-.482-.035h0L9.36,8.946a.6.6,0,0,0-.4.414h0L7.152,15.041a.627.627,0,0,0,0,.357.638.638,0,0,0,.312.38.621.621,0,0,0,.493.058h0l5.683-1.794a.625.625,0,0,0,.413-.4h0l1.783-5.682a.558.558,0,0,0,0-.391A.632.632,0,0,0,15.525,7.186Z"
            transform="translate(0 0)"
            fill={props.fillColor}
          />
        </G>
      </G>
    </Svg>
  );
}
