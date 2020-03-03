import React, { Component } from 'react'
import {View, Text, FlatList, Dimensions ,ScrollView, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';

const {width} = Dimensions.get('window')


export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data
        }
    }
    render() {
        console.log('home')
        return (
            <View>
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}

                <FlatList 
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
                />
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