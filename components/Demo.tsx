import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyTs from './MyTs'

export default class Demo extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <MyTs name={'122'}/>
            </View>
        )
    }
}
