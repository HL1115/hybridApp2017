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
// 方法装饰器

// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         // target是类原型对象
//         target.name = 'liu';//在原型上直接加一个属性
//         console.log(propertyKey)
//         console.log(descriptor)
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// console.log(new Greeter('world').name)

function enumerable(value: boolean) {
    console.log('enum call')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('enum dec call')
        descriptor.enumerable = value;
    };
}

function log(target:any,methodName:string,des:PropertyDescriptor){
    console.log('log call');
    var oldVal = des.value;
    des.value = function(){
        console.log(methodName+'被调用');
        return oldVal.apply(this,[...arguments]);
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(true)
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting + msg;
    }
}
let msg = new Greeter('world').greet('greet 参数')
console.log( msg )

// 属性装饰器，以下功能没有实现
// function DefaultValue(value: string) {
//     return function (target: any, propertyName: string) {
//         target[propertyName] = value;
//     }
// }
// class Hello {
//     @DefaultValue("Hello") 
//     greeting: any;
// }
// console.log('属性装饰器'+new Hello().greeting);

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
