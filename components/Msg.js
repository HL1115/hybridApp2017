import React, { Component } from 'react'
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
export default class Msg extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    render() {
        return (
            <View>
                <Button 
                    title='跳转到DOC页面' 
                    onPress={()=>Actions.msgdetail({id:100})}
                />
                <Icon color="red" name="search"/>
                <Text style={{fontSize:30}}>
                    消息数：{this.state.count}
                </Text>
                <Button 
                    title='消息数加1' 
                    onPress={()=>this.setState({count:1})}
                />
                <Button 
                    title='打开lightbox' 
                    onPress={()=>Actions.light()}
                />
                <Button 
                    title='登录' 
                    onPress={()=>Actions.login()}
                />
                <Button 
                    title='Login1' 
                    onPress={()=>Actions.login1()}
                />
                <Button 
                    title='跳到文档页' 
                    onPress={()=>Actions.doc()}
                />
            </View>
        )
    }
}
