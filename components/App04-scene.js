import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6

const styles = StyleSheet.create({
	
});
const App = () => {
	return (
		<Router>
			<Scene key="root">
				{/* 默认显示第一个scene，如果没放在第一个，可以加 initial 属性 */}
				<Scene 
					key='msg' title='消息' 
					component={Msg}
					titleStyle={{flex:1,textAlign:'center',color:'red'}}
				/>
				<Scene 
					key='msgdetail' title='消息详情' 
					backTitle='消息'
					backButtonImage={require('./assets/icon/user.png')}
					component={MsgDetail}
					titleStyle={{flex:1,textAlign:'center',color:'red'}}
					renderRightButton={<View></View>}
				/>
				<Scene 
					key='doc' title="文档" 
					component={Doc}
					titleStyle={{flex:1,textAlign:'center'}}
				/>
			</Scene>
		</Router>
	);
};


export default App;
