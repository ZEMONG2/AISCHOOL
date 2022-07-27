import React from "react";
import ColorCentext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorCentext.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        />
      )}
    </ColorCentext.Consumer>
  );
};

export default ColorBox;
