import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

// 装饰器其实就是一个函数，在函数里可以写一些新的逻辑，
// 包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
// 高阶组件--其实就是一个函数，就是装饰器
// @expr 语法其实是语法糖

// function helloWord(target: any) {
//     console.log('hello Word!');
// }
// @helloWord
// class HelloWordClass {
//     sayHello(){
        
//     }
// }
// 定义
// function addUrl(target:any){
//     target.prototype.url = 'https://'
// }

// @addUrl
// class HomeServer{
//     url:string|undefined;
//     getData(){
//         console.log(this.url)
//     }
// }

// let home = new HomeServer();
// home.getData()

class UserServer{
    getInfor(){

    }
}

// 带参数装饰器（装饰器工厂）
// function addUrl(url:string){
//     return function(target:any){ //这才是装饰器
//         target.prototype.url = url;
//     }
// }

// @addUrl('http://www.baidu.com')
// class HomeServer{
//     url:string|undefined;
//     getData(){
//         console.log(this.url)
//     }
// }
// let home = new HomeServer();
// home.getData()

function setStatusBar(color:string){
    return function(WrapComponent:any){
        return class extends Component{
            render(){
                return (
                    <>
                        <View 
                            style={{height:30,backgroundColor:color}}
                        >
                        </View>
                        <WrapComponent />
                    </>
                )
            }
        }
    }
}

@setStatusBar('red')
export default class Desc extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
