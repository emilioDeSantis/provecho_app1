import React, { useState } from 'react';
import { Image, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Like from '../buttons/like';
import ProfilePicture from '../ProfilePicture';

const FoodPicture = ({ uri, imageUri }) => (
    <View styles={[styles.container]}>
        <ImageBackground
        source={{ uri }}
        style={[styles.image]}
        >
        <Like/>
        </ImageBackground>
    </View>
);

export default FoodPicture;