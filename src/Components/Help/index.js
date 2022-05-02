import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Linking } from 'react-native'

const { width, height } = Dimensions.get('screen')
export default function Help({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.flexparent} />
            <TouchableOpacity style={styles.parent} onPress={() => {
                navigation.navigate('Home')
            }}>
                <Image style={styles.leftarrow} source={require('../../assets/images/leftarrow.png')} />
                <Text style={styles.back}>{'Back'}</Text>
            </TouchableOpacity>
            <View style={styles.helplineMainView}>
                <Text style={styles.helpline}>{'Helpline'}</Text>
                <View style={styles.mainheadchild}>
                    <Text style={styles.call}>{'Call us on 1800 1031 003 between'}</Text>
                    <Text style={styles.call}>{'7AM - 9PM. For any additional'}</Text>
                    <Text style={styles.call}>{'concerns, write to'}</Text>
                    <Text style={styles.link}
                        onPress={() => Linking.openURL('https://www.walmart.com/help')}>
                        customer.care@walmart.com
                    </Text>

                    <Text style={styles.call}>{'along with your phone number and the 17'}</Text>
                    <Text style={styles.call}>{'digit membership number'}</Text>
                </View>
            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    flexparent: {
        flexBasis: 50,
        backgroundColor: '#047BD5'
    },
    parent: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    leftarrow: {
        height: 25,
        width: 22,
        color: '#047BD5'
    },
    back: {
        color: '#047BD5',
        fontSize: 22,
        marginLeft: 7,
        fontWeight: 'bold'
    },
    mainhead: {
        marginTop: 10,
    },
    helpline: {
        marginBottom: '4%',
        fontWeight: 'bold',
        fontSize: 25,
        // marginLeft: 30
    },
    mainheadchild: {
        // marginTop: 15,
        flexDirection: 'column',

    },
    call: {
        marginVertical: 4
    },
    helplineMainView:
    {
        // justifyContent: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginTop: 20,
        marginHorizontal: 20,
        height: height / 2.8,
        paddingHorizontal: '8%',
        paddingTop: '8%'
    },
    link: {
        marginVertical: 4,
        color: '#047BD5'

    }

})