import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
export const SvgMyWorkout = (props) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO2YUQ6DIBBE58s71V7Ai1nba1rpNWjSrImhIbBAFey8hERRhwzM7ocAIYQQQlR0AB4AXgDsZhgAkzyvQTPI3VnMHbdKNIMYEb848/1mF2vQDLLukvbZ3prB3B5lxKbWTii3Rxqxmtrx5baGaPWa2vGJ12BEtRaNQA9PBGeO1gDgGdFmU1tlzEgxYmXM4uFzYRs2YsXD1wetRcuu9zSygSeCgtGaz1Lsg8dMc+3XpbWu5YVGoIcngoxdaq5GjLzYF1g0hFbzKnNLjPhUsFWGSG3pY4x4J2ZMhUYWMZH1K7WGaBXBVzuq3O6gmV07YyWaybWTk9tfaBJCCCH/yxukU+uYZJeLVgAAAABJRU5ErkJggg=="
        id="b"
        width={35}
        height={35}
      />
    </Defs>
  </Svg>
);
