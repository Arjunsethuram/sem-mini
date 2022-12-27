import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
 
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import colors from "../config/colors";

import defaultStyles from "../config/defaultStyles";
 
const AppTextInput = ({ icon,onChangeText,...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={ defaultStyles.color.medium}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput 
      placeholderTextColor="white"
      style={defaultStyles.text} onChangeText={onChangeText} {...otherProps}></TextInput>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
 
  // this code moved to defaultStyles.js -- for reusabality
  text: {
    // color: colors.dark,
    // fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avanir",
    // placeholderTextColor: 'red'
  },
});
export default AppTextInput;
