
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,//相当于div
  Text,
  StatusBar,
} from 'react-native';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';
// 创建一个组件，名为Hello，返回Helloworld，在App组件里调用
// const Hello = ()=>{
//   return (
//     <Text>helloworld123</Text>
//   )
// }

// 创建一个组件 ShowMyName，返回 hello + 你的名字，
// 名字在调用的时候传入

// 写一个 Counter ，返回一个数字文本和一个按钮，点击按钮，
// 数字加 1；

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Hello/>
          <ShowMyName name='liu'/>
          <Counter/>
        </View>
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
 
// });

export default App;
