import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Scene, Tabs, Drawer, Lightbox, Modal} from 'react-native-router-flux';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import { Grid, Icon } from '@ant-design/react-native';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName';
import Login from './components/Login';
import Home from './components/Home';

// 图标安装完后，要link，link成功后卸载App，再重新 npm run android
// 重装完以后，App停止运行的，卸载除了 react-native-router-flux之外的没用的包
// yarn remove 包名   删除包
// 每新装完一个包，服务就会自动停止，

const styles = StyleSheet.create({
	
});
const App = () => {
	// 实现 Tabs
	return (
		<Router>
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
								{/* 消息栏 */}
								<Scene key='home'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
									component={Home}
									
								>
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
											name='file'/
									>}
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
		</Router>
	);
};


export default App;
