import React from "react";
import { Platform } from "react-native";
import color from "./color";
 
export default {
  text: {
    color: 'white',
    paddingRight:20,
    paddingLeft:10,
    paddingTop:10,
    hight:"100%",
    fontSize: 18,
    borderRadius:'4rem',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avanir",
  },
  color: color, // or colors
};
