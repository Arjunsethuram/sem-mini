import React from 'react';
import { StyleSheet,View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Icon = ({size, bgColor, iconName, iconColor}) => {
    return (
        <View style={[styles.container, {width: size, height: size, backgroundColor: bgColor, borderRadius: size/2}]}>
            <MaterialCommunityIcons size={size/2} name={iconName} color={iconColor} />
        </View>
    );
}

let styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    }
})

export default Icon;