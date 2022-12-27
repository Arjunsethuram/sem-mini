import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import bg from "../assets/bg1.jpeg"
import CoustomText from './CoustomText';

const ListItem = ({image, title, subtitle, iconComponent}) => {
    return (
        <View  style = {styles.container}>
            <View style={styles.imgContainer}>
                {image ? <Image source={image} style={styles.image} resizeMode="cover"></Image> : iconComponent}
            </View>
            <View style={styles.contentContainer}>
                <CoustomText txtStyle={{color:"#000", fontSize:20, fontWeight: "600"}}>{title}</CoustomText>
                {subtitle && <CoustomText txtStyle={{color:"#64676a", fontSize:15,}}>{subtitle} </CoustomText>}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
    },
    imgContainer:{
        margin: 5
    },
    image:{
        width:100,
        height: 100,
        borderRadius: "50%",
    },
    contentContainer: {
        justifyContent: "center"
    }
})

export default ListItem;