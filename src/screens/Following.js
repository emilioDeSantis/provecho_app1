import React from 'react';
import { Text, View, Image, Scrollview} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Following = () => (
    <View style={{flex:1, alignItems: 'center'}}>
     <Image
      style={{width: 250, height: 250}}
     source = {{uri: 'http://www.pngplay.com/wp-content/uploads/1/Pizza-PNG-Photo.png'}}
     />
     <Image
      style={{width: 250, height: 250}}
     source = {{uri: 'http://www.pngplay.com/wp-content/uploads/1/Pizza-PNG-Photo.png'}}
     />
     <Image
      style={{width: 250, height: 250}}
     source = {{uri: 'http://www.pngplay.com/wp-content/uploads/1/Pizza-PNG-Photo.png'}}
     />
  </View> 
)
export default Following
