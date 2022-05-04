import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import list from '../../Category';
import { SliderBox } from 'react-native-image-slider-box';
// import Data from '../../Munafa';
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Data from '../../Munafa';






const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {

    const navigation = useNavigation()

    const _renderItem = ({ item }) => {
        console.log("hmar list", item)
        return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('Offers')}
                activeopacity={0.8}>
                  
                <View style={styles.parent}>
                    {/* <View style={styles.parent}> */}
                    <Image style={styles.card} source={item.img} />
                    {/* </View> */}
    
                    <Text style={[styles.cardtext, { fontSize: 8, }]}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const _renderItem1 = ({ item }) => {
        return (
            <View style={styles.Discount}>
                <View>
                    <Image style={styles.DiscountImage} source={require('../../assets/images/20percent.png')} />
                </View>
                <View style={styles.parents}>
                    <Image style={styles.cards} source={item.img} />
                    <View>
                        <Text style={styles.cardtexts}>{item.head}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: windowWidth * 2 / 4.5, marginTop: 20 }}>
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
        <SafeAreaView style={styles.inner}>
            <View style={styles.inner1}>
                <View style={{ flexBasis: 100, backgroundColor: '#047BD5' }}>
                    <View style={styles.inner2}>
                        <TouchableOpacity onPress={() => {
                            navigation.openDrawer();
                        }}>
                            <Image
                                style={styles.menu}
                                source={require('../../assets/images/menuhead.png')}
                            />
                        </TouchableOpacity>
                        <Image
                            style={styles.bestprice}
                            source={require('../../assets/images/bestprice.png')}
                        />
                        <View style={{ left: 10 }}>
                            <Text style={styles.preferred}>Preferred Store:</Text>
                            <Text style={styles.bhopal}>Bhopal,Misrod</Text>
                        </View>
                    </View>

                    <View style={styles.inputtext}>

                        <Image
                            style={styles.search}
                            source={require('../../assets/images/search.png')} />

                        <TextInput
                            style={styles.inputinner}
                            placeholder='Search for Product and more'
                        />
                        <TouchableOpacity>
                            <Image
                                style={styles.scanner}
                                source={require('../../assets/images/barcode.png')} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.flatlistmain}>
                    <FlatList
                        data={list}
                        horizontal
                        renderItem={_renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Offers")}
                        activeopacity={0.4}>
                        <View>
                            <SliderBox images={[
                                require('../../assets/images/Sliderbar1.png'),
                                require('../../assets/images/Slide2.png'),
                                require('../../assets/images/slide3.png'),
                                require('../../assets/images/slide4.png'),
                                require('../../assets/images/slide5.png'),
                                require('../../assets/images/slide6.png'),
                                require('../../assets/images/slide7.png'),
                                require('../../assets/images/slide8.png'),
                                require('../../assets/images/slide9.png')
                            ]}
                                circleLoop
                                autoplay={true}
                                sliderBoxHeight={180}
                                resizeMode='contain'
                                dotColor='black' />
                        </View>
                    </TouchableOpacity>


                    <View style={styles.Munafa}>
                        <Text style={styles.munafatext}>{'Munafa Deals'}</Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Offers')}>
                                <View style={styles.parentcard}>
                                    <View>
                                        <Text style={styles.cardchildtext}>{'Munafa Deal'}</Text>
                                        <Text style={styles.cardchildtext}>{'Aashirvad Aata'}</Text>
                                    </View>
                                    <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/attaaa.png')} />

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Offers')}>


                                <View style={styles.parentcard}>
                                    <View>
                                        <Text style={styles.cardchildtext}>{'Munafa Deal'}</Text>
                                        <Text style={styles.cardchildtext}>{'Real Fruit Juice'}</Text>
                                    </View>
                                    <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/real.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Offers')}>


                                <View style={styles.parentcard}>
                                    <View>
                                        <Text style={styles.cardchildtext}>{'Munafa Deal'}</Text>
                                        <Text style={styles.cardchildtext}>{'Maggie'}</Text>
                                    </View>
                                    <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/maggie.png')} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Offers')}>


                                <View style={styles.parentcard}>
                                    <View>
                                        <Text style={styles.cardchildtext}>{'Munafa Deal'}</Text>
                                        <Text style={styles.cardchildtext}>{'Horlicks'}</Text>
                                    </View>
                                    <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/horlicks.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.Munafa}>
                        <Text style={styles.munafatext}>Best Sellers</Text>
                        <View style={{ flexDirection: "row" }}>

                            <View style={styles.parentcard}>
                                <View>
                                    <Text style={styles.cardchildtext}>{'Rice & pulses'}</Text>
                                </View>
                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/pulserice.png')} />
                            </View>

                            <View style={styles.parentcard}>
                                <View>
                                    <Text style={styles.cardchildtext}>{'Personal Care'}</Text>
                                </View>
                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/Detoldove.png')} />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.parentcard}>

                                <View>
                                    <Text style={styles.cardchildtext}>{'Home Care'}</Text>
                                </View>
                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/rin.png')} />

                            </View>


                            <View style={styles.parentcard}>

                                <View>
                                    <Text style={styles.cardchildtext}>{'Processed Food'}</Text>
                                </View>

                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/lays.png')} />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.parentcard}>



                                <View>
                                    <Text style={styles.cardchildtext}>{'Tasty Beverges'}</Text>
                                </View>

                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/bourn.png')} />
                            </View>

                            <View style={styles.parentcard}>

                                <View>
                                    <Text style={styles.cardchildtext}>{'Dairy & Fresh'}</Text>
                                </View>
                                <Image style={styles.cardchild} source={require('../../assets/images/MunafaImage/amul.png')} />

                            </View>
                        </View>
                    </View>

                    <View>
                        <SliderBox images={[
                            require('../../assets/images/Sliderbar1.png'),
                            require('../../assets/images/Slide2.png'),
                            require('../../assets/images/slide3.png'),
                            require('../../assets/images/slide4.png'),
                            require('../../assets/images/slide5.png'),
                            require('../../assets/images/slide6.png'),
                            require('../../assets/images/slide7.png'),
                            require('../../assets/images/slide8.png'),
                            require('../../assets/images/slide9.png')

                        ]}
                            circleLoop
                            autoplay={true}
                            sliderBoxHeight={180}
                            resizeMode='contain'
                            dotColor='black' />
                    </View>


                    <View style={styles.zone}>
                        <Text style={{ fontSize: 20 }}>{'Offer Zone'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 10 }}>
                        <View style={{}}>
                            <Image style={{ height: windowHeight / 7, width: windowWidth / 2.15 }} source={require('../../assets/images/new.png')} />
                        </View>
                        <View>
                            <Image style={{ height: windowHeight / 7, width: windowWidth / 2.15 }} source={require('../../assets/images/coca.png')} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 20 }}>{"Best Price Exclusive"}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Offers')}
                        >
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#047BD5' }}>{'See All'}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <FlatList
                        data={Data}
                        horizontal
                        renderItem={_renderItem1}
                        showsHorizontalScrollIndicator={false}
                    />



                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    parent: {
        padding: 2,
        alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1,
        // backgroundColor: 'green',
    },
    inner: {
        backgroundColor: '#047BD5',
        flex: 1
    },
    inner1: {
        flex: 1,
        backgroundColor: 'white'
    },
    inner2: {
        flexDirection: 'row',
        flexBasis: 50,
    },
    flatlistmain: {
        // height: windowHeight / 8,
        backgroundColor: 'white',
    },
    menu: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginTop: 8,
    },
    bestprice: {
        height: 30,
        width: 30,
        marginLeft: 10,
        // marginTop: 40,
    },
    inputtext: {
        backgroundColor: 'white',
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    inputinner: {
        textAlign: 'center',
        padding: 20,
        fontSize: 17,
        width: 270,
        color: 'black',
    },
    search: {
        height: 22,
        width: 22,
        marginTop: 10,
        marginLeft: 5

    },
    scanner: {
        height: 20,
        width: 25,
        left: 30,
        marginTop: 10
    },
    preferred: {
        color: 'white'
    },
    bhopal: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 1
    },
    card: {
        // borderWidth:1,
        alignSelf: 'center',
        height: 80,
        width: 80,
        marginHorizontal: 1,
        resizeMode: 'contain',
        // marginLeft:30,
    },
    parentcard: {
        flexDirection: 'row',
        // alignContent: 'space-between',
        justifyContent: 'space-between',
        backgroundColor: '#82A284',
        padding: 5,
        height: windowHeight / 7,
        width: windowWidth / 2.15,
        margin: 2,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    cardtexts: {
        // width:50,
        // alignSelf:'center',
        fontWeight: '700',
        fontSize: 13,
        textAlign: 'center',
    },
    Munafa: {
        padding: 7,
    },
    munafatext: {
        fontSize: 20
    },
    cardchild: {
        width: 80,
        height: 80,
        //   backgroundColor:'grey',
        resizeMode: 'contain'
    },
    cardchildtext: {
        marginVertical: 2,
        fontWeight: 'bold'

    },
    zone: {
        padding: 15
    },


    Discount: {
        borderColor: 'lightgrey',
        marginTop: 5,
        borderWidth: 1,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        borderRadius: 5
    },
    DiscountImage: {
        height: 50,
        width: 50,
        position: 'absolute',
        zIndex: 1
    },
    parents: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        justifyContent: 'space-between'
    },
    cardtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    cards: {
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
        marginHorizontal: windowWidth / 8,

        borderRadius: 20,
        marginBottom: 10,

    },
    margin: {
        borderWidth: 2,
        marginTop: 10,
        borderColor: '#4E944F',
        borderRadius: 5,
        marginRight: 10
    },
    margintext: {
        fontSize: 18,
        color: '#4E944F'
    }




})