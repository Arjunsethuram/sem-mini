import React ,{useState} from 'react';
import { StyleSheet, View, TextInput ,Text } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import Btn from './Components/Btn';
import Card from './Components/Card';
import ListScreen from './Screens/ListScreen';
import Account from './Screens/Account';
import ListItem from './Components/ListItem';

import AppPicker from './Components/AppPicker';
import CoustomText from './Components/CoustomText';
import  RegisterFormik from './Screens/Formik';
import Login from './Screens/login';
import LoginScreen1 from './Screens/loginScreen1';



 
export default function App() {
  const [categories,setCategories]=useState()
  const [data,setData]=useState({fName:" ",lName:" ",eMail:" ",passWord:" "} ) 

  const products=[
    {id:1,
     title:"Oil" 

    },
    {id:2,
      title:"Shampoo" },
    {
      id:2,
      title:"Talken powder"
    }
  ]
  
  return (
    <View style={styles.container}>
       {/* < Btn />  */}
      
      {/* <WelcomeScreen />  */}
      <ListScreen />
       {/* <Account />   */}
        {/* <Register  selected={data} onSelected={setData} />  */}
       {/* <RegisterFormik/>                                                   */}

         {/* <LoginScreen1 /> */}

       
       {/* <Login/> */}
        {/* <AppPicker icon="menu" selected={categories} onSelected={setCategories} placeholder="Categories" items={products}/> */}
       {/* <TextInput placeholder='Enter the Name '></TextInput> */}
       {/* <ListItem/> */}
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    backgroundColor:"#e6e6e6",
  }
})

// import React from "react";
// import { Button, Image, StyleSheet, Text, View } from "react-native";
// import {createStackNavigator} from "@react-navigation/stack";
// import {NavigationContainer} from "@react-navigation/native";

// const Product=({Navigation})=>{
//   <Screen>
// <Text>Product page</Text>
// <Button title="ProductDetail Page" onPress={()=>Navigation.navigate("ProdectDetails")}></Button>
//   </Screen>
// }

// const ProductDetails=()=>{
//   <Screen>
// <Text>Product Details page</Text>
//   </Screen>
// }
// const Stack= createStackNavigator()

// const StackNavigator =()=>{
//   <Stack.Navigator initialRouteName="ProductDetails">
//     <Stack.Screen name="Product" component={Product}></Stack.Screen>
//     <Stack.Screen name="ProductDetails" component={ProductDetails}></Stack.Screen>
//   </Stack.Navigator>
// }
// function App() {
  

//   return (
//     <NavigationContainer>
//       <StackNavigator> </StackNavigator>
//     </NavigationContainer>
//   );
// }



// export default App;
