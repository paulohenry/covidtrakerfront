import React from "react";
import LottieView from "lottie-react-native";

export default function RadarAnimation() {
  return (
    <LottieView
      source={require("../../animations/radarAnimation.json")}
      resizeMode='cover'
      autoSize
      autoPlay
      loop
    />
  );
}
