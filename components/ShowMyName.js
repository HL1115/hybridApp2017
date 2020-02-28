import React from 'react';
import {View,Text} from 'react-native';

const ShowMyName = (props) => {
    return (
        <View>
            <Text>hello {props.name}</Text>
        </View>
    )
}
export default ShowMyName;