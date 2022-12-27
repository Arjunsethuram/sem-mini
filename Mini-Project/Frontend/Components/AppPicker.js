import React,{useState} from "react";
import { View, StyleSheet, TextInput, Platform,Modal, TouchableOpacity,FlatList,Button } from "react-native";
import Btn from "./Btn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//import colors from "../config/colors";
import ListItem from "./ListItem";
import PickerItem from './pickerItem'

import defaultStyles from "../config/defaultStyles";
import CoustomText from "./CoustomText"; 

const AppPicker  = ({ items,icon,placeholder,selected,onSelected,...otherProps }) => {
    const [visible,setVisible]=useState(false)
  return (
    <>
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={ defaultStyles.color.medium}
          size={20}
          style={styles.icon}
        />
      )}
      <TouchableOpacity onPress={()=>setVisible(true)}>
      <CoustomText>{selected ? selected : placeholder}</CoustomText>
      <MaterialCommunityIcons
          name="chevron-down"
          color={ defaultStyles.color.medium}
          size={20}
          style={styles.icon}
        />
        </TouchableOpacity>
    </View>
    <Modal visible={visible}
    animationType="slide"
    >
       
    <Button title='Cose' onPress={()=>setVisible(false)}></Button>
     
     <FlatList data={items} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>{
                return(
                  <PickerItem lable={item.title} onPress={()=>onSelected(item.title)}></PickerItem>
            )}}
            />
       
    </Modal>
    </>
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
});
export default AppPicker;
