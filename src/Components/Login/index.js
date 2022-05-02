import { View, Text, SafeAreaView, Image, StyleSheet, ViewBase, Dimensions } from 'react-native'
import React, { startTransition, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
// import { SafeAreaView } from 'react-native-safe-area-context'
const { width, height } = Dimensions.get('window')
export default function Login({ navigation }) {
    const [number, setNumber] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const validateNum = () => {
        let reg = /^\d{10}$/;
        return reg.test(number);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexBasis: 100, backgroundColor: '#047BD5' }}>
                <View style={styles.parent}>
                    <View style={{ flexDirection: 'row', }}>


                        <View style={styles.arrow}>

                            <TouchableOpacity

                                activeOpacity={0.4}
                                onPress={() => navigation.goBack()}
                            >
                                <Image style={styles.leftarrow} source={require('../../assets/images/left-arrow.png')} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.mainbestprice}>
                            <Image style={styles.bestprice} source={require('../../assets/images/bestprice.png')} />
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.textprice}>{'Best Price Flipkart'}</Text>
                            <Text style={styles.textprice}>{'Wholesale'}</Text>
                        </View>
                    </View>
                    {/* <View style={styles.call}>

             </View> */}
                    <View style={styles.mainhelp}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Help')
                            }}
                            style={{ flexDirection: 'row' }} >
                            <Image style={styles.callhelp} source={require('../../assets/images/phone.png')} />
                            <Text style={styles.texthelp}>{'Help'}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={styles.loginhead}>
                <Text style={styles.logintext}>{'Login'}</Text>
            </View>

            <View style={styles.inputinner}>
                <TextInput
                    style={styles.inputtext}
                    keyboardType='numeric'
                    placeholder='Membership ID/Phone No.'
                    onChangeText={(item) => {
                        setNumber(item)
                    }}
                />
            </View>

            <View style={{ marginVertical: 355, padding: 20 }}>
                <View>
                    <Text style={{ color: 'grey', fontWeight: 'bold' }}>{'New to Best Price Flipkart Wholesale?'}</Text>
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={{ color: '#047BD5' ,fontWeight:'bold'}}>{'Apply for Membership'}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    disabled={!validateNum()}
                    onPress={() => navigation.navigate('Home')}

                    activeOpacity={0.4}
                    style={!validateNum() ? { ...styles.button, backgroundColor: 'grey' } : styles.button}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Continue'}</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
    },
    arrow: {
        marginHorizontal: 2
    },
    leftarrow: {
        width: 30,
        height: 30,

    },
    bestprice: {
        height: 40,
        width: 40,
        marginLeft: 10,
    },
    price: {
        marginHorizontal: 10
    },
    textprice: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mainbestprice: {
        marginHorizontal: 1
    },
    loginhead: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    logintext: {
        fontSize: 30

    },
    inputinner: {
        marginHorizontal: width / 4,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginLeft: 30,
        height: 42,
        width: 320,
        borderRadius: 5


    },
    inputtext: {
        justifyContent: 'center',
        padding: 10,
        fontSize: 18
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    button: {

        width: '90%',
        // marginHorizontal:20,
        alignSelf: 'center',
        height: 45,
        backgroundColor: '#FF5F00',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 20
    },
    callhelp: {
        width: 28,
        height: 28,
        // marginHorizontal:50
        marginRight: 50,
        marginRight: 10

    },
    mainhelp: {
        //     marginHorizontal:60,
        //  justifyContent:'flex-end'
        // flexDirection:'row',
        marginHorizontal: 20
    },
    texthelp: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        // marginHorizontal:80,
        // borderWidth:1,
        marginBottom: 30
    },
    call: {

    }
})
