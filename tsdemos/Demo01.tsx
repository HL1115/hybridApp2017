import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 类型断言：可以确定地指定一个值的类型
// 形式：
// <Type>值 在jsx中不能用
// 值 as 类型

// interface Person{
//     name:string;
//     age: number;
// }

// let user1:Person = { name:'a',age:20 }
// let user1 = {} as Person;
// user1.name = 'liu';
// user1.age = 18;
// user1.job = 'aaa';

// 联合类型 或者 any类型
// function getLength(p1:string|number):number{
//     return (p1 as string).length
// }

// 类定义
// 
// 用es5方式：创建一个Person类，有name和age属性，调用的时候传入

// function Person(name:string,age:number){
//     this.name = name;
//     this.age = age;
// }
// let user = new Person('zhang',20);
// console.log(user)

class Person{
    // 访问修饰符
    protected name:string;
    age:number;
    constructor(name:string,age:number){
        this.age = age;
        this.name = name;
    }
    sayName(){

    }
}

class Worker extends Person{
    // 静态属性
    static money:number;
    job:string = '程序员';
    constructor(name:string,age:number,job:string){
        super(name,age);
        console.log(this.name)
        // this.job = job
    }
}

Worker.money = 1000;
let user = new Worker('zang',18,'程序员');
console.log(user.job)





export default class Demo01 extends Component {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <View>
                <Text> Demo01 </Text>
            </View>
        )
    }
}
