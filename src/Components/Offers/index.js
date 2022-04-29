import { View, Text,SafeAreaView,Image,StyleSheet,FlatList, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Data from '../../Munafa'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


const {width,height} = Dimensions.get('window')

export default function Offers() {
    const navigation = useNavigation()

    const _renderItem = ({ item }) => {
        return (
            <View style={{borderColor:'lightgrey',marginTop:20,borderWidth:1}}>

            <View style={styles.parent}>    
                <Image style={styles.card} source={item.img} />
                <View>
    
                <Text style={styles.cardtext}>{item.head}</Text>
                <Text style={styles.cardtext}>{item.Price}</Text>
                </View>
               
            </View>
                <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Login')} >
                <Text style={styles.login}>{item.Buy}</Text>
                </TouchableOpacity>
    </View>
        )
    }
    
    return (
        
        <View style={{ flex: 1 }}>
        <View style={{ flexBasis: 100, backgroundColor: '#047BD5', justifyContent: 'center', alignItems: 'flex-end', flexDirection:'row', paddingBottom: 10 }}>
            <Text style={{ fontSize: 18, textAlign: 'center' ,color:'white',fontWeight:'bold',marginTop:20}}>All offers</Text>
            <Image style={styles.searchicon} source={require('../../assets/images/search_not.png')}/>
          
            <TouchableOpacity
            activeOpacity={0.4}
            onPress={()=>navigation.navigate('Categories') } >
            <Image style={styles.leftarrow} source={require('../../assets/images/left-arrow.png')}/>
            </TouchableOpacity>
           
        </View>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                
                    <TouchableOpacity style={styles.head}>
                    <Text style={styles.headtedxt}>All Offers</Text>
                    </TouchableOpacity>
                
            
                
                    <TouchableOpacity style={styles.head}>
                    <Text style={styles.headtedxt}>Combo Offers</Text>
                    </TouchableOpacity>
                   
                
            <TouchableOpacity style={styles.head}>
            <Text style={styles.headtedxt}>All Online Only Offer</Text>
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
    parent: {
        flexDirection: 'row',
    
    },
  searchicon:{
      width:20,
      height:20,
      left:120
  },
  leftarrow:{
    width:25,
    height:20,
    right:220
  },
  cardtext:{

  },
  card:{
      height:100,
      width:90
  },
  login:{
      color: 'white',
    },
    loginButton: {
      backgroundColor:'#047BD5',
      alignItems: 'center',
      padding: 10,
      marginHorizontal: width/4,
      borderRadius:20
  },
  head:{
    backgroundColor:'#047BD5',
    padding:10,
    borderRadius:10
  },
  headtedxt:{
      color:'white'
  }

})