import React from 'react';
import { 
    StyleSheet,
    ImageBackground,
    Image,
    View,
    Text
 } from 'react-native';

import image from '../assets/home.jpg'
import logo from '../assets/png-transparent-gym-logo-fitness-thumbnail.png'
import CoustomBtn from '../Components/CoustomBtn';

import color from '../config/color';
 
const WelcomeScreen = () => {

     return (
         <ImageBackground style={styles.bg} source={image} resizeMode="cover" blurRadius={5} >
            <View style={styles.contentContainer}>
                <Image style={styles.img} source={logo} />
                <Text style={styles.brand}>Home Workout App</Text>
            </View>
            <View>
                <CoustomBtn text={"Login"} coustomStyle={color.secondary} />
                <CoustomBtn text={"Register"} coustomStyle={color.primary}/>
            </View>
         </ImageBackground>
     );
 }
 
 const styles = StyleSheet.create({
     bg:{
         flex: 1,
         justifyContent: "flex-end",
         paddingTop: 10,
         paddingLeft:15,
     },
     brand: {
         fontSize: 20,
         fontWeight: "900",
         color: "#ffff",
         alignContent:"center",
        //  left:30,
         right:40,
        //  paddingLeft:2,
         paddingTop: 40,
     },
     btnLogin:{
         width: "100%",
         height: 50,
         backgroundColor: "deeppink"
     },
     btnReg:{
        width: "100%",
        height: 50,
        backgroundColor: "#f19920"
    },
    contentContainer:{
        position: "absolute",
        top: "10%",
        left: "35%",
        alignItems: "center",
        justifyContent:'center'
    },
    img:{
        width: 100,
        height: 100,
        borderRadius:20,
        // left:30 ,
        right:25
        
    },
    login:{
        backgroundColor: "green"
    },
    reg: {
        backgroundColor: "#f19920",
    }
 })

 export default WelcomeScreen;