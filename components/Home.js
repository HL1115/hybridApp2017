import React, { Component } from 'react'
import { Animated, Easing, View, ActivityIndicator, Text, FlatList, Dimensions ,ScrollView, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window')


export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20)
        }
    }
    zoom = ()=>{
        Animated.timing(this.state.width,{
            toValue: 200,
            // easing: Easing.elastic() 
        }).start()
    }
    render() {
        console.log('home')
        return (
            <View>
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                <Icon color="red" name='chevron-left'/>
                {/* <ActivityIndicator size='large' color="red"/> */}
                <View style={{alignItems:'center',marginBottom:20}}>
                    <Button 
                        onPress={()=>{Actions.mylist()}}
                        style={styles.btn}
                    >跳转 Mylist</Button>
                </View>
                <Button 
                    onPress={()=>{this.zoom()}}
                    style={styles.btn}
                >变大</Button>
                <Animated.View
                    style={{
                        width: this.state.width,
                        height: 200,
                        backgroundColor: 'red'
                    }}
                ></Animated.View>
                {/* <FlatList 
                    ListHeaderComponent={
                        <Button 
                            onPress={()=>{
                                MessageBarManager.showAlert({
                                    title: '提示标题',
                                    message: '具体信息',
                                    alertType: 'info',
                                    stylesheetInfo:{backgroundColor:'red'}
                                })
                            }}
                            style={styles.btn}
                        >头部按钮</Button>
                    }
                    ListFooterComponent={<Text>尾部</Text>}
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                /> */}
                {/* <ScrollView 
                    pagingEnabled={true} 
                    horizontal={true}
                    style={{height:300}}
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 200,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        backgroundColor: 'red'
    },
    slide:{
        width: width*0.4,
        height: 300,
        marginLeft: width*0.07,
        marginTop:10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})