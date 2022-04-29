import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabActions } from '@react-navigation/native';
import Categories from '../Components/Categories';
import Login from '../Components/Login';
import Help from '../Components/Help';
import Offers from '../Components/Offers';
import Home from '../Components/Home';


const tab=createBottomTabNavigator();


export default function TabNav({navigation}) {
  return (
   <tab.Navigator screenOptions={{ headerShown: false }}>
       <tab.Screen name='Home' component={Home}
      options={{
        tabBarIcon: ({ focused }) => {
            return (
                <Image style={{ height: 25, width: 25, }}
                    source={!focused ? require('../assets/images/home2.png') : require('../assets/images/home1.png')} />
            )
        },
    
    }}
       />
       <tab.Screen name='Categories' component={Categories}
         options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Image style={{ height: 25, width: 25, }}
                        source={!focused ? require('../assets/images/menu.png') : require('../assets/images/menu_not.png')} />
                )
            },
        
        }}
       />
       <tab.Screen name='Login' component={Login}
          options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Image style={{ height: 25, width: 25, }}
                        source={!focused ? require('../assets/images/user.png') : require('../assets/images/user_not.png')} />
                )
            },
        
        }}
       />
       <tab.Screen name='Offers' component={Offers}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Image style={{ height: 25, width: 25, }}
                        source={require('../assets/images/discount.png')} />
                )
            },
        
        }}
       />
       <tab.Screen name='Help' component={Help}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <Image style={{ height: 25, width: 25, }}
                        source={require('../assets/images/telephone.png')} />
                )
            },
        
        }}
       />
   </tab.Navigator>
  )
}