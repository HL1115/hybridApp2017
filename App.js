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
import SplashScreen from 'react-native-splash-screen'
// App logo : 将myApp\android\app\src\main\res下的文件夹下图片换成自己的 
// 启动画面 ：react-native-splash-screen
// 如果第一次安装，一般来说都有一个引导页（普通轮播图），注意本地存储记录下状态
// 看功能，是否需要先登录，如果需要先登录，登录完记录状态（用户信息）
// 再次进入的时候，也要从本地判断是否登录过

// react native中本地存储是异步的
// 

console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
	// 实现 Tabs
	let now = 0;
	useEffect(()=>{
		SplashScreen.hide();
		fetch(rootUrl+'/topics?limit=5')
			.then(res=>res.json())
			.then(res=>console.log(JSON.stringify(res)))
	},[])
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='home'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
								>
									<Scene key='home' hideNavBar={true} component={Home}/>
									<Scene 
										hideTabBar 
										hideDrawerButton
										key='mylist' 
										component={Mylist}
									/>
								</Scene>
								{/* 消息栏 */}
								<Scene key='msg'
									title='消息'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key="ms" component={Msg}/>
									<Scene 
										key="msgdetail" 
										hideTabBar    
										component={MsgDetail}
									/>
								</Scene>
								{/* 文档栏 */}
								<Scene 
									key='doc'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='file'/>
										}
									title="文档"
									component={Doc}
								/>
								
							</Tabs>
						</Scene>
					</Drawer>
					<Scene key='light' component={Mybox}/>
				</Lightbox>
				<Scene key="login" component={ShowMyName}/>
				<Scene key="login1" component={Login}/>
			</Modal>
			<Scene component={Message}/>
			</Overlay>
		</Router>
	);
};

export default App;
