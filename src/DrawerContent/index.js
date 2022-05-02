import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'

export default function DrawerContent({ navigation }) {
    console.log('navigation', navigation)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlp0NaDHLILBtrDP2yjiWXBJofbGBqGnEOZUyE7kKpUqDMRlmvsGpON2JEGw-X83v5rRI&usqp=CAU' }}
                    style={{ width: '98%', height: 180, alignSelf: 'center', }} />
            </View>
            <View>
            
                <View style={styles.membership}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white' }}>Apply for Membership</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.already}>
                    <Image style={styles.img}
                        source={require('../assets/images/user.png')} />
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>Already a Member?</Text>
                </View>
                <View style={styles.login}>
                        {/* <Text> {'\n\n\n\nDrawerContent'}</Text> */}
                        <Link style={{ alignSelf: 'center', color: '#047BD5' }} to={{ screen: 'Login' }}>
                    <TouchableOpacity>
                        <Text style={{color:'#047BD5,',fontWeight:'bold'}}>
                            {'Login here'}
                        </Text>
                    </TouchableOpacity>
                            </Link>

                </View>
                <View style={{borderBottomWidth:1,marginTop:20,borderColor:'lightgrey'}}>

                </View>
            </View>
            <View style={{ padding: 5, paddingLeft: 10 }}>
                <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={styles.img}
                            source={require('../assets/images/location.png')} />
                        <Text style={{ padding: 5 }}>Store Locator</Text>
                    </View>
                </TouchableOpacity>


                        <Link to={{screen:'Help'}}>
                     <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={styles.img}
                            source={require('../assets/images/message.png')} />
                        <Text style={{ padding: 5 }}>Help and Support</Text>
                        
                    </View>
                </TouchableOpacity>
                        </Link>

                 <Link to={{screen:'Help'}}>
                <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={styles.img}
                            source={require('../assets/images/phone-call.png')} />
                        <Text style={{ padding: 5 }}>Call Helpline</Text>
                    </View>
                </TouchableOpacity>
                </Link>
            </View>

            <View style={{borderBottomWidth:1,marginTop:20,borderColor:'lightgrey'}}>

            </View>
            <View style={{ padding: 5, paddingLeft: 10}}>
                <TouchableOpacity>
                <View style={styles.locator}>
                    <Image style={styles.img}source={require('../assets/images/mark.png')}/>
                    <Text style={{padding:5}}>{'Terms of use'}</Text>
                </View>
                </TouchableOpacity>

                 <TouchableOpacity>
                <View style={styles.locator}>
                <Image style={styles.img}source={require('../assets/images/share.png')}/> 
                    <Text  style={{padding:5}}>{'Share'}</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.locator}>
                <Image style={styles.img}source={require('../assets/images/star.png')}/> 
                    <Text  style={{padding:5}}>{'Rate Us on App Store'}</Text>
                </View>
                </TouchableOpacity> 
                <TouchableOpacity>
                <View style={styles.locator}>
                <Image style={styles.img}source={require('../assets/images/shield.png')}/> 
                    <Text  style={{padding:5}}>{'Privacy Policy'}</Text>
                </View>
                </TouchableOpacity> 

                <TouchableOpacity>
                <View style={styles.locator}>
                <Image style={styles.img}source={require('../assets/images/best-price.png')}/> 
                    <Text  style={{padding:5}}>{'About Best Price'}</Text>
                </View>
                </TouchableOpacity>   
                
            </View>

            <View style={{marginTop:10,padding:10}}>
                <Text style={{fontSize:20,color:'grey'}}>{'FSSAI License No.:10014 011 001901'}</Text>
            </View>

<View style={{padding:10,backgroundColor:'lightgrey'}}>
    <Text style={{fontSize:15,color:'grey',fontWeight:'bold'}}>{'Version 10.25.0'}</Text>
</View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    membership: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#047BD5',
        width: '90%',
        alignSelf: 'center',
        height: 30,
        justifyContent: 'center',
        borderRadius: 20
    },
    already: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    login: {

        padding: 8,
        borderWidth: 1,
        marginHorizontal: 30,
        top: 7,
        borderRadius: 20,
        marginRight: 100,
        marginLeft: 50,
        borderColor: '#047BD5',
        borderBottomWidth:1,
        
         
        
    },
    locator: {
        // paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20, marginTop: 10,
        
    },
    img:{
        height:25,
        width:25, 
    }
})