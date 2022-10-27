import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './components/Menu';
import Cau01 from './components/Cau01';
import Cau02 from './components/Cau02';
import Cau03 from './components/Cau03';
import Cau04 from './components/Cau04';
import Cau05 from './components/Cau05';
import Cau06 from './components/Cau06';
import Cau07 from './components/Cau07';

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu"
        component={Menu}
        options={{ title: 'Menu', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau01"
        component={Cau01}
        options={{ title: 'Cau01', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau02"
        component={Cau02}
        options={{ title: 'Cau02', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau03"
        component={Cau03}
        options={{ title: 'Cau03', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau04"
        component={Cau04}
        options={{ title: 'Cau04', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau05"
        component={Cau05}
        options={{ title: 'Cau05', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau06"
        component={Cau06}
        options={{ title: 'Cau06', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen name="Cau07"
        component={Cau07}
        options={{ title: 'Cau07', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}