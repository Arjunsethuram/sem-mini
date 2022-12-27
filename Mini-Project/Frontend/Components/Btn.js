import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Btn = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer} >
                <Text style={styles.btnText}>Button</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        borderRadius: 50,
    },
    btnText:{
        fontSize: 20,
        color: "#FFF"
    },
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Btn;