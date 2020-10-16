import React, { useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';



const Like = () => (
    
    // const [likeColor, setLikeColor] = useState('#ffcc4d');

    // const likeHandler = () => {
    //     setLikeColor('#fe7f9c');
    // };
    <View style={{marginLeft: 320, paddingBottom: 180}}>
        
        <TouchableOpacity>
            <Image style={{width: 30, height: 30, marginBottom: 7}}
                source={require('../../images/like.png')}>
            </Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={{width: 30, height: 30, marginBottom: 7}}
                source={require('../../images/comment.png')}>
            </Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={{width: 30, height: 30, marginBottom: 7}}
                source={require('../../images/made.png')}>
            </Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={{width: 30, height: 30, marginBottom: 7}}
                source={require('../../images/send.png')}>
            </Image>
        </TouchableOpacity>
    </View>
);
export default Like;