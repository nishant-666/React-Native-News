import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechScreen from './screens/Tech';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor: '#ffc107'}}>
        <Tab.Screen name="All" component={All}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon name='rowing' type='feather' name='home' color={props.color}/>
            ),
          }} />

        <Tab.Screen name="Business" component={Business}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon name='rowing' type='feather' name='dollar-sign' color={props.color}/>
            ),
          }} />

        <Tab.Screen name="Health" component={HealthScreen}
          options={{ 
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon name='rowing' type='feather' name='heart' color={props.color}/>
            ),
          }} />

        <Tab.Screen name="Sports" component={SportsScreen}
          options={{ 
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon name='rowing' type='ionicon' name="tennisball-outline" color={props.color}/>
            ),
          }} />

        <Tab.Screen name="Tech" component={TechScreen}
          options={{ 
            headerShown: false,
            tabBarIcon: (props) => (
              <Icon name='rowing' type='ionicon' name="hardware-chip-outline" color={props.color}/>
            ),
            }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}