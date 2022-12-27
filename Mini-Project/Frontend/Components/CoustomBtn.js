import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const CoustomBtn = ({text, coustomStyle}) => {
    
    return (
        <View style={[ styles.btnContainer, {backgroundColor: coustomStyle} ]} >
            <Text style={styles.btnText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        margin: 10,
    },
    btnText:{
        fontSize: 20,
        color: "#FFF"
    },

})

export default CoustomBtn;