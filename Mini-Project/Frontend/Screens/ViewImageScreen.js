import { StyleSheet, SafeAreaView, View, ImageBackground, Platform, Image } from 'react-native';
import backgroundImage from '../assets/bg2.webp'
const ViewImageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={{width: "15%", height: 60, backgroundColor: "red", left: 20, position: "absolute"}}></View>
                <View style={{width: "15%", height: 60, backgroundColor: "green", right: 20, position: "absolute" }}></View>
                <View></View>
            </View>
                <Image style={styles.image} source={backgroundImage} resizeMode="contain" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#64676a",
        flex: 1,
        paddingTop: Platform.OS === "android" && 18,
      },
    iconContainer:{
        flex: 0.5,
        flexDirection: "row",
        position: 'relative',
        alignItems: "center"

    },
    image: {
        alignSelf: "center",
        height: 500,
        width:500,
        top: 50     
    }
})
export default ViewImageScreen;