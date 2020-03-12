import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 声明变量
const str = 'abc';
let num:number = 100;

// let arr:Array<number> = [1,3]
let arr:string[] = ['aaa','bbb']

// let obj: object = {name:'zhangsan'}
let obj: {name:string} = {name:'zhangsan'}
// 元组
let tupleArr:[string,number,boolean] = ['ss',2,true]


// enum Lev {one=100,two=200,three};
// let myLev:Lev = Lev.two;
// console.log(myLev)
// enum week {ri,yi,er};

// any 
let a: any = 'any type';

// 接口
interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any
}

let hybird: Course = {
    title:'hybrid',
    intro: '混合应用开发',
    name:100
}

// 函数声明
// function fun(pa1:string,pa2:number):boolean{
//     return true;
// }
// fun(12,3);

// interface MyFunc {
//     (params1:string):boolean
// }

// let fun:MyFunc = function(pa:string){

//     return true;
// }

export default class MyTs extends Component {
    render() {
        return (
            <View>
                <Text
                    style={{fontSize:20}}
                > 
                    textInComponent{arr}{obj.name} 
                </Text>
            </View>
        )
    }
}
