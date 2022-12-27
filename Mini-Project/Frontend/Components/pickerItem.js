import React from 'react';
import { StyleSheet,  TouchableOpacity, View } from 'react-native';
import CoustomText from './CoustomText'


const PickerItem = ({lable,onPress}) => {
    return (
        <View >
        <TouchableOpacity onPress={onPress}>
            <CoustomText>{lable}</CoustomText>
    
        </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 330,
        alignItems: "center",
        marginVertical: 10,
    },
});
export default PickerItem;