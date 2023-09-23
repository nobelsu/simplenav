import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home, { About, Contact } from "./components.js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#90EE90"} size={size} />
          ),
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
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={"#90EE90"} size={size} />
          ),
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
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={"#90EE90"} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
