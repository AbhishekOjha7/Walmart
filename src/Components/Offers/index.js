import { View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Data from '../../Munafa'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

export default function Offers() {
    const navigation = useNavigation()

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.Discount}>
                <View>
                    <Image style={styles.DiscountImage} source={require('../../assets/images/20percent.png')} />
                </View>
                <View style={styles.parent}>
                    <Image style={styles.card} source={item.img} />
                    <View>
                        <Text style={styles.cardtext}>{item.head}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 2 / 4.5, marginTop: 20 }}>
                            <Text style={styles.cardprice}>{item.Price}</Text>
                            <Text style={styles.carddrop}>{item.pricedrop}</Text>
                        </View>
                        <View style={styles.margin}>
                            <Text style={styles.margintext}>{item.Margin}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.login}>{item.Buy}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.parenthead}>
                <Text style={styles.alloffer}>{'All offers'}</Text>
                <TouchableOpacity>
                    <View>
                    <Image style={styles.searchicon} source={require('../../assets/images/search_not.png')} />
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate('Categories')} >
                    <Image style={styles.leftarrow} source={require('../../assets/images/left-arrow.png')} />
                </TouchableOpacity>

            </View>
            <View>
                <View style={styles.headchilds}>

                    <TouchableOpacity style={styles.head}>
                        <Text style={styles.headtedxt}>{'All Offers'}</Text>
                    </TouchableOpacity>


                        <TouchableOpacity
                        activeOpacity={0.4}
                        >
                    <View style={styles.headmain}>
                            <Text style={styles.headcombo}>{'Combo Offers'}</Text>
                    </View>
                        </TouchableOpacity>



                    <TouchableOpacity style={styles.headmain}>
                        <View>
                        <Text style={styles.headcombo}>{'All Online Only Offer'}</Text>
                        </View>
                 
                    </TouchableOpacity>
                </View>

                <View style={styles.parentmain}>
                    <View style={styles.child}>
                        <Text style={styles.showing}>{'Showing 30 Results'}</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.filterparent}>
                            <Image style={styles.filtericon} source={require('../../assets/images/filter.png')} />
                            <Text style={styles.filtertext}>{'Filter'}</Text>
                            <Image style={styles.filtericon2} source={require('../../assets/images/play.png')} />

                        </View>
                    </TouchableOpacity>

                </View>


                <FlatList
                    data={Data}
                    renderItem={_renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Discount: {
        borderColor: 'lightgrey',
        marginTop: 5,
        borderWidth: 1
    },
    DiscountImage: {
        height: 50,
        width: 50,
        position: 'absolute',
        zIndex: 1
    },
    parenthead: {
        flexBasis: 100,
        backgroundColor: '#047BD5',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    alloffer: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20
    },
    parent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150
    },
    headchilds: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },
    searchicon: {
        width: 25,
        height: 25,
        left: 120
    },
    leftarrow: {
        width: 25,
        height: 20,
        right: 220
    },
    cardtext: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        height: 100,
        width: 90,
        marginTop: 30

    },
    carddrop: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        color: 'grey'
    },
    cardprice: {
        fontWeight: 'bold',
        fontSize: 18
    },

    login: {
        color: 'white',

    },
    loginButton: {
        backgroundColor: '#047BD5',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: width / 4,
        borderRadius: 20,
        marginBottom: 10
    },
    head: {
        backgroundColor: '#047BD5',
        padding: 10,
        borderRadius: 20
    },
    headtedxt: {
        color: 'white'
    },
    headcombo: {
        color: '#047BD5'
    },
    headmain: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#047BD5',
        borderRadius: 20,
        padding: 10

    },
    parentmain: {
        flexDirection: 'row'
    },
    child: {
        padding: 10, marginTop: 20
    },
    showing: {
        fontWeight: 'bold',
        fontSize: 18
    },
    filterparent: {
        marginHorizontal: 70,
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20
    },
    filtericon: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    filtertext: {
        fontWeight: 'bold',
        fontSize: 18
    },
    filtericon2: {
        height: 18,
        width: 18,
        marginHorizontal: 5
    },
    margin: {
        borderWidth: 2,
        marginTop: 10,
        borderColor: '#4E944F',
        borderRadius: 5
    },
    margintext: {
        fontSize: 18,
        color: '#4E944F'
    }

})