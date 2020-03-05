import React, { Component } from 'react'
import {View, Text, ActivityIndicator} from 'react-native'

export default class Mylist extends Component {
    constructor(){
        super()
        this.state = {
            data: [1,2,3,4,5,6],
            isLoad: false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoad: true
            })
        },1000)
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {
                    this.state.isLoad?(
                            this.state.data.map((item)=>(
                                <Text key={item}>{item}</Text>
                            ))
                        ):<ActivityIndicator color="red" size='large'/>
                }
            </View>
        )
        // if(this.state.isLoad){
        //     return (
        //         <View>
        //             {
        //                 this.state.data.map((item)=>(
        //                     <Text key={item}>{item}</Text>
        //                 ))
        //             }
        //         </View>
        //     )
        // }else{
        //     return (
        //         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        //             <ActivityIndicator color="red" size='large'/>
        //         </View>
        //     )
        // }
    }
}
