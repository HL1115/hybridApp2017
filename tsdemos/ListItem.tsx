import React, { Component } from 'react'
import { Text, View } from 'react-native'
interface Props{
    name: string;
    data:{
        id:string,
        title:string
    }
}
interface State{
    title:string
}

export default class ListItem extends Component<Props,State> {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
