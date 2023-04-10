import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
export const SvgStatistic = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h48v48H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.02083)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO2YSw7CMAxE5y70ktl5QTkk9CB0FRRRFkgF2Q5VB3WelN206dTOxwaEEOLIDAAmANUxpkVPRXF+/Gs0PRUWNND0tAasQ7MbJgM7Y4rAzhhTBC4AZsdW2DQjo4E5sJ/fGQ3U4KA24NWYDPwQRQDraA38XQoNySqJxkBJVkk0BixZJVEasIBGBqAIPFEK4TNaxHCgFIJS6A0dZGvoJEbfz9r8MpfpStTAXJtcpzN9oZKc6yutQLk5X3gFcFqeGwOduXPnXEIIAQ4e2Q5J2yIJgboAAAAASUVORK5CYII="
        id="b"
        width={35}
        height={35}
      />
    </Defs>
  </Svg>
);
