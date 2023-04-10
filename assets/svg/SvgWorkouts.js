import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
export const SvgWorkouts = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h50v50H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.02)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVR4nO3ZQQrCMBCF4XePxp3m7hK6st5Koe0FIoG3EFFw1xn4PxgIQxczpVk8KgH4R5HUJO2uWdJFCZd4SuofNXqTEmke/ObBRy3uXZXI7qHf3/7JvfXL8z1oafOhZF9k9mHxMqPu7o3PLo0q6fHjsp+VzOSLvblaxiUAAIARrCJpBCsdnkE6wSqySrACAAAxFf5YBdIIVjo8THWCVWSVYAVAWbwAblhSyPZ78IAAAAAASUVORK5CYII="
        id="b"
        width={35}
        height={35}
      />
    </Defs>
  </Svg>
);
