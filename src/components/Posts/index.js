import * as React from 'react';
import { View } from 'react-native';
import Post from '../Post';

const data = [
    {
        imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: "Conrad",
        location: "Boston, MA",
        foodUri: 'https://cdn.pixabay.com/photo/2016/11/29/04/49/blueberries-1867398_1280.jpg',
        caption: "My new favorite recipe!"

    },
    {
        imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: "Janya",
        location: "New Delhi",
        foodUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        caption: "My new favorite recipe!"
        
    },
    {
        imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: "Person",
        location: "Medford, MA",
        foodUri: 'https://drive.google.com/file/d/1gHNTV__k1mpgZQTiikGv2G9v2e_yCIZ7/view?usp=sharing',
        caption: "My new favorite recipe!"
        
    },
    {
        imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: "Test",
        location: "Florida",
        caption: "My new favorite recipe!"
        
    },
    {
        imageUri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        name: "Test",
        location: "Medford, MA",
        caption: "My new favorite recipe!"
        
    }
]

const Posts = () => (
    <View>
        <Post imageUri={data[0].imageUri} name={data[0].name} location={data[0].location} foodUri={data[0].foodUri} caption={data[0].caption}/>
    </View>
)

export default Posts;