import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNav from '../TabNav';

const Stack=createNativeStackNavigator();

export default function StackNavigator({navigation}) {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}  >

    <Stack.Screen name='TabNav' component={TabNav}/>
      </Stack.Navigator>
  )
}