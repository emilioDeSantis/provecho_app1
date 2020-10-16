import * as React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import FoodPicture from '../FoodPicture';

const Post = ({imageUri, name, location, foodUri, caption}) => (
    <View style={{marginTop: 37, marginBottom: 60, marginHorizontal: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{location}</Text>
            <View style={{paddingLeft: 120}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
            </View>
                <ProfilePicture uri={imageUri} />
        </View>
        <View>
            <FoodPicture uri={foodUri} />
        </View>
        <View style={{flexDirection: 'row', marginTop: -80}}>
            <Text style={{fontWeight: 'bold', paddingRight: 10}}>{name}</Text>
            <Text>{caption}</Text>
        </View>
    </View>
)
export default Post;