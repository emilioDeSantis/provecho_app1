import * as React from 'react';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './src/screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

const Create = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Create!</Text>
  </View>
);

const Inspire = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Inspire!</Text>
  </View>
);

const App = () => {
  return (
    <>
       <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Following"
        tabBarOptions={{
          activeTintColor: '#ffcc4d',
          inactiveTintColor: '#ffcc4d',
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            paddingTop: 60,
            activeTintColor: '#ffcc4d'
          },
          navigationOptions: {
            headerShown: false,
            gestureEnabled: false
          },
          labelStyle: {
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: 16
          },
          indicatorStyle: {
            borderBottomColor: '#ffcc4d',
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen
          name="Inspire"
          component={Inspire}
          options={{
            tabBarLabel: 'Inspire',
          }}
        />
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Feed',
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarLabel: 'Create',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </>
  )
}
export default App;