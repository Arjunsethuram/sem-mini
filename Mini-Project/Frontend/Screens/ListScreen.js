

import { View, StyleSheet, Text, FlatList} from 'react-native';
import Card from '../Components/Card';
import color from '../config/color';

const list = [
    {
        id: 1,
        title:"Chest Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0S9jXDoykjxP1aiAdnEBaQVa-PnHklVd-A&usqp=CAU"}
    },
    {
        id: 2,
        title:"Arms Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_m7filDdqwpC30-sNsOu1xgWWmWiiy6i8g&usqp=CAU"}
    },
    {
        id: 3,
        title:"ABS Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvuXWf4iES7D2go4tvnk_KwUqSiGrxmAfdA&usqp=CAU"}
    },
    {
        id: 3,
        title:"back Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://img.youtube.com/vi/09CZPfbxGRc/0.jpg"}
    },
    {
        id: 3,
        title:"Shoulder Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://builtwithscience.com/wp-content/uploads/2020/04/Home-Shoulder-Workout.jpg"}
    },
    {
        id: 3,
        title:"Leg Workout at Home",
        price:"15 exercises",
        cardImage : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzjVAkSoiB3LFhCgDzxh8-FLlrlB7JVWo5Q&usqp=CAU"}
    }

]


const ListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList data={list} keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>{
                return(
                    <Card 
                    title={item.title} 
                    price={item.price}
                    cardImage={item.cardImage}
                    />
            )}}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
})

export default ListScreen;