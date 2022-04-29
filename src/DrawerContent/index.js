import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
                    <Image style={{ height: 25, width: 25, }}
                        source={require('../assets/images/user.png')} />
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>Already a Member?</Text>
                </View>
                <View style={styles.login}>
                        {/* <Text> {'\n\n\n\nDrawerContent'}</Text> */}
                        <Link style={{ alignSelf: 'center', color: 'blue' }} to={{ screen: 'Login' }}>
                    <TouchableOpacity>
                        <Text>
                            Login here
                        </Text>
                    </TouchableOpacity>
                            </Link>

                </View>
            </View>
            <View style={{ padding: 25, paddingLeft: 10 }}>
                <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={{ height: 25, width: 25, }}
                            source={require('../assets/images/location.png')} />
                        <Text style={{ padding: 5 }}>Store Locator</Text>
                    </View>
                </TouchableOpacity>


                        <Link to={{screen:'Help'}}>
                <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={{ height: 25, width: 25, }}
                            source={require('../assets/images/message.png')} />
                        <Text style={{ padding: 5 }}>Help and Support</Text>
                        
                    </View>
                </TouchableOpacity>
                        </Link>

                <TouchableOpacity>
                    <View style={styles.locator}>
                        <Image style={{ height: 25, width: 25, }}
                            source={require('../assets/images/phone-call.png')} />
                        <Text style={{ padding: 5 }}>Call Helpline</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 25, paddingLeft: 10 }}>
                <TouchableOpacity>
                <View style={styles.locator}>
                    <Text>Terms of use</Text>
                </View>
                </TouchableOpacity>

                 <TouchableOpacity>
                <View style={styles.locator}>
                    <Text>Share</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.locator}>
                    <Text>Rate Us on App Store</Text>
                </View>
                </TouchableOpacity> 
                <TouchableOpacity>
                <View style={styles.locator}>
                    <Text>Privacy Policy</Text>
                </View>
                </TouchableOpacity> 

                <TouchableOpacity>
                <View style={styles.locator}>
                    <Text>About Best Price</Text>
                </View>
                </TouchableOpacity> 
                
                
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    membership: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'blue',
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
        borderColor: 'blue'
    },
    locator: {
        // paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20, marginTop: 10
    }
})