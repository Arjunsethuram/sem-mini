import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CoustomText from './CoustomText'

const Card = ({title, price, cardImage}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={cardImage} /> 
                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.cost}>{price}</Text>
            </View>
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
    card: {
        width: "95%",
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden"
    },
    cardImage:{
        width:"100%",
        height: "75%",
    },
    cost:{
        fontSize: 20,
        fontWeight: "800",
        color: "#21d4dd",
        margin: 5
    },
    heading:{
        fontSize: 20,
        margin: 5 
    }
})


export default Card;