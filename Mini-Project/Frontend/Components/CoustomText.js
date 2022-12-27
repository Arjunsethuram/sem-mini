import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import color from "../config/color";

const CoustomText = ({ children, txtStyle={} }) => {
  return <Text style={[styles.para, txtStyle]}> {children} </Text>;
};

export default CoustomText;


const styles = StyleSheet.create({
  para: {
    ...Platform.select({
      ios: {
        fontSize: 15,
        color: "red",
      },
      android: {
        fontSize: 100,
        color: color.secondary,
      },
    }),
  },
});
