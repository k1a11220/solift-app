import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      {...props}
    >
      <Path
        id="패스_7713"
        data-name="패스 7713"
        d="M7.682,21.589V18.073a1.637,1.637,0,0,1,1.648-1.625h3.328a1.66,1.66,0,0,1,1.166.476,1.614,1.614,0,0,1,.483,1.149v3.516a1.39,1.39,0,0,0,.412,1A1.431,1.431,0,0,0,15.728,23H18a4.021,4.021,0,0,0,2.829-1.149A3.908,3.908,0,0,0,22,19.064V9.047a2.836,2.836,0,0,0-1.037-2.188L13.239.777A3.605,3.605,0,0,0,8.667.859l-7.548,6A2.839,2.839,0,0,0,0,9.047V19.054A3.974,3.974,0,0,0,4,23H6.221a1.421,1.421,0,0,0,1.431-1.4Z"
        transform="translate(0 0)"
        fill={props.fillColor}
      />
    </Svg>
  );
}
