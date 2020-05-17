import React from "react";
import { SafeAreaView, Text } from "react-native";
import RadarAnimation from "../RadarAnimation";

export default function Loading() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <RadarAnimation />
      <Text
        style={{
          fontSize: 32,
          marginBottom: 35,
          fontWeight: "bold",
          color: "rgba(2,157,100, 0.7)",
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        Carregando...
      </Text>
    </SafeAreaView>
  );
}
