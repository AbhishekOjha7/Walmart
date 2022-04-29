import { View, Text,SafeAreaView,StyleSheet,Image,Dimensions} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Linking } from 'react-native'

const {width,height} = Dimensions.get('window')
export default function Help({navigation}) {
    return (
        <View style={{ flex: 1 }}>
        <View style={{ flexBasis: 50, backgroundColor: '#047BD5'}}>

        </View>
        <TouchableOpacity style={styles.parent} onPress={()=>{
           navigation.navigate('Home') 
        }}>
        <Image style={styles.leftarrow} source={require('../../assets/images/back.png')}/>
            <Text style={styles.back}>{'Back'}</Text>
        </TouchableOpacity>
       <View style={styles.helplineMainView}>
       <View  style={styles.mainhead}>
            <Text style={styles.helpline}>{'Helpline'}</Text>
        </View>
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
    parent:{
        flexDirection:'row',
        borderBottomWidth:1,
    borderColor:'lightgrey'
    },
    leftarrow :{
        height:25,
        width:25,
    },
    back:{
        color:'blue',
        fontSize:20,
        marginLeft:7
    },
    mainhead:{
        marginTop:10,
    },
    helpline:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:30
    },
    mainheadchild:{
marginTop:15,
    },
    call:{
        marginLeft:30,
        marginVertical:4
    },
    helplineMainView:
    {
        borderColor:'lightgrey',
        borderWidth:1,
        marginTop:20,
        marginHorizontal:20,
        height:'30%',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    link:{
        marginLeft:30,
        marginVertical:4,
        color:'#047BD5'

    }
  
})