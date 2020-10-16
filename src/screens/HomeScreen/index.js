import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../../components/Posts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const HomeScreen = () => (
  <>
    <Posts />
  </>
)
export default HomeScreen;