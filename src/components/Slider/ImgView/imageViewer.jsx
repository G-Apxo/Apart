import React, { useState, useMemo } from "react";
// import { animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export default ({ data, width, height }) => {
  const [left, setLeft] = useState(0);
  const { halfDistance, fullDistance, halfCount } = useMemo(
    () => ({
      halfDistance: data.length * width * 0.5,
      fullDistance: data.length * width,
      halfCount: data.length / 2
    }),
    [data]
  );

  const bind = useDrag(
    ({ down, offset: [mx, my] }) => {
      const increments = Math.floor((mx / width) * halfCount);
      const incrementsToPx =
        (-halfDistance + increments * width) % -fullDistance;
      if (incrementsToPx > 0) {
        setLeft(0);
      } else {
        setLeft(incrementsToPx);
      }
    },
    {
      bounds: { left: -width, right: width }
    }
  );

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        {...bind()}
        style={{
          position: "absolute",
          display: "flex",
          left
        }}
      >
        {data.map((i) => (
          <img
            src={i}
            alt={i}
            height={"auto"}
            width={width}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};
