import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import { Grid, Icon } from '@ant-design/react-native';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
import Login from './components/Login';
import Home from './components/Home';
import Message from './components/Message';
import Mylist from './components/Mylist';
import LocalPage from './components/LocalPage';
import Test from './components/Test';
import MyTs from './components/MyTs';
import Demo01 from './tsdemos/Demo01';
// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止，

// App logo : 将myApp\android\app\src\main\res下的文件夹下图片换成自己的 
// 启动画面 ：react-native-splash-screen
// 如果第一次安装，一般来说都有一个引导页（普通轮播图），注意本地存储记录下状态
// 看功能，是否需要先登录，如果需要先登录，登录完记录状态（用户信息）
// 再次进入的时候，也要从本地判断是否登录过

// react native中本地存储是异步的
// 
console.disableYellowBox = true;

const App = () =>{
	return <View>
		<Demo01 name={100222}/>
	</View>
}
// const App = () => {
// 	// 实现 Tabs
// 	let now = 0;
// 	return (
// 		<Router
// 			backAndroidHandler={()=>{
// 				if(Actions.currentScene != 'home'){
// 					Actions.pop();
// 					return true;
// 				}else{
// 					if(new Date().getTime()-now<2000){
// 						BackHandler.exitApp();
// 					}else{
// 						ToastAndroid.show('确定要退出吗',100);
// 						now = new Date().getTime();
// 						return true;
// 					}
// 				}
				
// 			}}
// 		>
// 			<Overlay>
// 			<Modal key="modal" hideNavBar>
// 				<Lightbox key="lightbox">
// 					<Drawer 
// 						key="drawer"
// 						contentComponent={()=><Text>drawer</Text>}
// 						drawerIcon={()=><Icon name="menu"/>}
// 						drawerWidth={400}
// 					>
// 						<Scene key="root">
// 							<Tabs 
// 								key='tabbar'
// 								hideNavBar
// 								activeTintColor="red"
// 								inactiveTintColor="blue"
// 								tabBarStyle={{backgroundColor:'#ccc'}}
// 							>
// 								{/* 首页 */}
// 								<Scene key='home'
// 									title='首页'
// 									icon={
// 										({focused})=><Icon 
// 											color={focused?'red':'blue'} 
// 											name="home"
// 										/>
// 									}
// 								>
// 									<Scene key='home' hideNavBar={true} component={MyTs}/>
// 									<Scene 
// 										hideTabBar 
// 										hideDrawerButton
// 										key='mylist' 
// 										component={Mylist}
// 									/>
// 								</Scene>
// 								{/* 消息栏 */}
// 								<Scene key='msg'
// 									title='消息'
// 									icon={
// 										({focused})=><Icon 
// 											color={focused?'red':'blue'} 
// 											name="file"
// 										/>
// 									}
									
// 								>
// 									<Scene key="ms" component={Msg}/>
// 									<Scene 
// 										key="msgdetail" 
// 										hideTabBar    
// 										component={MsgDetail}
// 									/>
// 								</Scene>
// 								{/* 文档栏 */}
// 								<Scene 
// 									key='doc'
// 									hideDrawerButton
// 									icon={({focused})=>
// 										<Icon 
// 											color={focused?'red':'blue'} 
// 											name='file'/>
// 										}
// 									title="文档"
// 									component={Doc}
// 								/>
								
// 							</Tabs>
// 						</Scene>
// 					</Drawer>
// 					<Scene key='light' component={Mybox}/>
// 				</Lightbox>
// 				<Scene key="login" component={ShowMyName}/>
// 				<Scene key="login1" component={Login}/>
// 			</Modal>
// 			<Scene component={Message}/>
// 			</Overlay>
// 		</Router>
// 	);
// };

export default App;
