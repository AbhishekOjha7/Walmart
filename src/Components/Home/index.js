import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import list from '../../Category';
import { SliderBox } from 'react-native-image-slider-box';
// import Data from '../../Munafa';
import { Dimensions } from 'react-native'

const _renderItem = ({ item }) => {
    console.log("meraa list", item)
    return (
        <View style={{ padding: 5, alignItems: 'center', }}>

            <Image style={styles.card} source={item.img} />
            <Text style={styles.cardtext}>{item.title}</Text>
        </View>
    )
}

//const {height, width}= Dimensions.get('screen);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor:'#047BD5',flex:1}}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexBasis: 100, backgroundColor: '#047BD5' }}>

                <View style={{ flexDirection: 'row', flexBasis: 50, }}>

                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer();

                        // navigation.toggleDrawer();
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

            <View style={{ height: windowHeight / 8, backgroundColor: 'white', }}>

                <FlatList
                    data={list}
                    horizontal
                    renderItem={_renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>


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

                <View style={styles.Munafa}>
                    <Text style={styles.munafatext}>Munafa Deals</Text>
                    {/* <View style={{borderWidth:1, height:windowHeight/6, flexDirection:'row', paddingLeft:10}}>
<View>
   
    
   <View style={{borderWidth:1, flexDirection:'row'}}>
   <View > 
    <Text style={styles.cardtext}>Munafa Deal</Text> 
       <Text style={styles.cardtext}>Aashirvad Chakki Atta</Text> 
    </View> 
    <View>
    <Image resizeMode='stretch' style={styles.card} source={require('../../assets/images/MunafaImage/attaaa.png')} />
    </View>
     </View>
</View>
</View>

<TouchableOpacity>
   
    
   <View style={{borderWidth:1, flexDirection:'row'}}>
   <View > 
    <Text style={styles.cardtext}>Munafa Deal</Text> 
       <Text style={styles.cardtext}>Aashirvad Chakki Atta</Text> 
    </View> 
    <View>
    <Image resizeMode='stretch' style={styles.card} source={require('../../assets/images/MunafaImage/attaaa.png')} />
    </View>
     </View>
     </TouchableOpacity>
                 */}

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Munafa Deal'}</Text>
                            <Text style={styles.cardtext}>{'Aashirvad Chakki Atta'}</Text>  
                                </View>
                          
                          <Image style={styles.card} source={require('../../assets/images/MunafaImage/attaaa.png')} />
                             
                        </View>

                        <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Munafa Deal'}</Text>
                            <Text style={styles.cardtext}>{'Real Fruit Juice'}</Text>
                            </View>
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/real.png')} />
                            

                        </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Munafa Deal'}</Text>
                            <Text style={styles.cardtext}>{'Maggie'}</Text>
                            </View>
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/maggie.png')} />
                        </View>

                        <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Munafa Deal'}</Text>
                            <Text style={styles.cardtext}>{'Horlicks'}</Text>
                            </View>
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/horlicks.png')} />
                        </View>
                    </View>
                </View>

                <View style={styles.Munafa}>
                    <Text style={styles.munafatext}>Best Sellers</Text>
                    <View style={{ flexDirection: "row" }}>

                        <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Rice & pulses'}</Text>
                            </View>
                        <Image style={styles.card} source={require('../../assets/images/MunafaImage/pulserice.png')} />
                      </View>

                      <View style={styles.parentcard}>
                            <View>
                            <Text style={styles.cardtext}>{'Personal Care'}</Text>
                            </View>
                        <Image style={styles.card} source={require('../../assets/images/MunafaImage/Detoldove.png')} />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.parentcard}>

                         <View>
                         <Text style={styles.cardtext}>{'Home Care'}</Text>
                         </View>
                         <Image style={styles.card} source={require('../../assets/images/MunafaImage/rin.png')} /> 

                        </View>
   

                        <View style={styles.parentcard}>
                            
                            <View>
                            <Text style={styles.cardtext}>{'Processed Food'}</Text>
                            </View>
                      
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/lays.png')} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.parentcard}>

                          
                            
                            <View>
                            <Text style={styles.cardtext}>{'Tasty Beverges'}</Text>
                            </View>
       
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/bourn.png')} />
                        </View>

                        <View style={styles.parentcard}>
                            
                            <View>
                            <Text style={styles.cardtext}>{'Dairy & Fresh'}</Text>
                            </View>
                            <Image style={styles.card} source={require('../../assets/images/MunafaImage/amul.png')} />

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

            </ScrollView>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
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
        height: 70,
        width: 80,
        // marginLeft:30,


    },
    parentcard: {
        flexDirection: 'row',
        // alignContent: 'space-between',
        justifyContent: 'space-between',
        backgroundColor: '#FFA1A1',
        padding: 5,
        height:windowHeight/7,
        width: windowWidth / 2.15,
        margin: 2,
        borderRadius:2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    cardtext: {
        fontSize: 8,
        // width:50,
        // alignSelf:'center',
        fontWeight: '700',
        fontSize:8
    },
    Munafa: {
        padding: 10
    },
    munafatext: {
        fontSize: 20
    }
})