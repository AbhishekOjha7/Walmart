import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
// import { SafeAreaView } from 'react-native-safe-area-context'
import list from '../../Category'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Categories({ navigation }) {
    const _renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                style={styles.parentcard}
                onPress={()=>navigation.navigate('Offers') }>
                <Image style={styles.card} source={item.img} />
                <Text style={styles.titletxt}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.parent}>
            <View style={styles.child}>
                <Text style={styles.childtext}>Categories</Text>
                <TouchableOpacity
                activeOpacity={0.4}
                >
                <Image style={styles.searchicon} source={require('../../assets/images/search_not.png')} />
                </TouchableOpacity>

            </View>
            <FlatList
                data={list}
                renderItem={_renderItem}
                numColumns={2}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    parentcard: {
        alignContent: 'space-between',
        backgroundColor: 'white',
        padding: 30,
        width: windowWidth / 2,
        margin: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    card: {
        height: 90,
        width: 120,

    },
    titletxt: {
        fontWeight: 'bold'
    },
    searchicon: {
        width: 20,
        height: 20,
        left: 120,

    },
    parent:{
        flex:1,
    },
    child:{
        flexBasis: 100,
         backgroundColor: '#047BD5',
         justifyContent: 'center', 
        alignItems: 'flex-end', 
         flexDirection: 'row',
         paddingBottom: 10 
    },
    childtext:{
        fontSize: 18, 
        textAlign: 'center', 
        color: 'white', 
        fontWeight: 'bold',
         marginTop: 20,
    },
})