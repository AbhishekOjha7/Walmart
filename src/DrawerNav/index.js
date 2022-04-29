import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../StackNavigator';
import Categories from '../Components/Categories';
import TabNav from '../TabNav';
import DrawerContent from '../DrawerContent';
import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Help from '../Components/Help';
const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator()

const DrawerNav=()=>{
  return(
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false,
      drawerType:'front',
      // drawerStyle:()=>( <View style={{backgroundColor:'red'}}><Text>Header</Text></View>)
    }}
    drawerContent={()=><DrawerContent/>}>
      <Drawer.Screen name="Stack" component={StackNavigator} />
      <Drawer.Screen name="Categories" component={Categories} />
    </Drawer.Navigator>
  )
}

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Drawer' component={DrawerNav}
        options={{
         headerShown:false
        }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
