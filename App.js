import React,{useState} from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TooltipConfigurationScreen from './screens/TooltipConfigurationScreen';
import ButtonsScreen from './screens/ButtonsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TooltipConfigurationScreen" component={TooltipConfigurationScreen} />
        <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
