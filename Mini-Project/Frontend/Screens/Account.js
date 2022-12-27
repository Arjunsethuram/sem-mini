import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ListItem from "../Components/ListItem";
import Icon from "../Components/Icon";
import bg from "../assets/man.png";
let list = [
  {
    id: 1,
    title: "My workouts",
    iconComponent: 
      <Icon
        size={50}
        iconName={"format-list-bulleted"}
        iconColor={"white"}
        bgColor={"blue"}
      />
    
  },
  {
    id: 2,
    title: "My Message",
    iconComponent:
      <Icon size={50} iconName={"email"} iconColor={"white"} bgColor={"blue"} />
  
  },
];

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ListItem
          image={bg}
          title={"Sethuraman A"}
          subtitle={"sethuraman@gmail.com"}
        />
      </View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => (
          <ListItem iconComponent={item.iconComponent} title={item.title} />
        )}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 5,
                backgroundColor: "gray",
              }}
            />
          );
        }}
      />
      <View style={styles.logout}>
          <ListItem
            title="Logout"
            iconComponent={<Icon size={50} iconName={"logout"} iconColor={"white"} bgColor={"red"} />}
        />
        </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
      marginBottom: 15
  },
  logout: {
      position: "absolute",
      top: 300,
      width: "100%"

  }
});
export default Account;
