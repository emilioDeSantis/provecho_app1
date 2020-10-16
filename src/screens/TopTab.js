import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Create from './Create';
import Following from './Following';
import Inspire from './Inspire';


const Tab = createMaterialTopTabNavigator();

const TopTab = () => (
    <Tab.Navigator
      initialRouteName="Following"
      tabBarOptions={{
        activeTintColor: '#ffcc4d',
        inactiveTintColor: '#ffcc4d',
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          paddingTop: 60,
          activeTintColor: '#ffcc4d',
        },
        navigationOptions: {
          headerShown: false,
          gestureEnabled: false
        },
        labelStyle: {
          textTransform: 'none',
          fontSize: 23,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
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
        name="Feed |"
        component={Following}
        options={{
          tabBarLabel: 'Feed |',
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
);
export default TopTab;