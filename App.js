import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home, { About, Contact } from "./components.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
        }}/>
        <Tab.Screen name="About" component={About} options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
        }}/>
        <Tab.Screen name="Contact" component={Contact} options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
