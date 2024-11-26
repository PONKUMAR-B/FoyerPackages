import React from "react";
import styled from "@emotion/styled";

const CircularWrapper = styled("div")(({ size, thickness }) => ({
  display: "inline-block",
  position: "relative",
  width: size,
  height: size,
  "&::before": {
    content: '""',
    display: "block",
    paddingBottom: "100%",
  },
}));

const Circle = styled("circle")(({ color, theme }) => ({
  stroke: theme?.palette?.[color]?.main || color,
  strokeLinecap: "round",
}));

function CircularProgress({
  size = 40,
  color = "primary",
  thickness = 3.6,
  value = 0,
  variant = "indeterminate",
  sx,
  disableShrink = false,
}) {
  const circleStyle =
    variant === "determinate"
      ? { strokeDasharray: "100, 100", strokeDashoffset: `${100 - value}%` }
      : undefined;

  return (
    <CircularWrapper
      size={typeof size === "number" ? `${size}px` : size}
      thickness={thickness}
    >
      <svg
        viewBox="22 22 44 44"
        style={{
          transform: disableShrink ? "none" : "rotate(0.5turn)",
          ...sx,
        }}
      >
        <Circle
          cx="44"
          cy="44"
          r="20"
          strokeWidth={thickness}
          style={circleStyle}
          color={color}
        />
      </svg>
    </CircularWrapper>
  );
}

export default CircularProgress;
