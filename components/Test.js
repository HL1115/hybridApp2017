import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,
    Button,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: '玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../assets/good1.png')
    },
    {
        title: 'O休闲食品Oishi/上好佳',
        price: 39,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳闲食品Oishi/上好佳',
        price: 36,
        img: require('../assets/good1.png')
    },
    {
        title: '膨化休闲食品Oishi/上好佳',
        price: 88,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36,
        img: require('../assets/good1.png')
    },
]

export default class Test extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入名称"
                            style={{
                                width: 490*s,height: 50*s,
                                padding: 0,
                                paddingLeft: 10
                            }}
                        />
                        <Icon name='search' />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{height:180*s,marginTop: 60*s}}
                            />
                            <Text
                                style={{marginTop: 20}}
                            
                            >{item.title}</Text>
                            <Text 
                                style={{width:'100%',color: 'red'}}
                            >{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search:{
        width: 544*s,
        height: 50*s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav:{
        height: 73*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good:{
        width: 290*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 20*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center'
    }
})
// npm run android 或者 react-native run-android,在模拟器或者真机上装的
// 是测试版本的安装包，不要每天装一次，以后只需要执行 npm start起服务即可，
// 然后点开 App，服务界面就会编译文件

// adb reverse tcp:8081 tcp:8081

// 执行 ./gradlew，打包出一个签名好的可用于发布的版本的安装包，不用调试
// 手机调试：
// 1、打开开发者选项（选一种方式连接手机）
// 2、测试： adb devices
// 3、react-native run-android
// 拔掉数据后，再接入的时候，不用再装，还是执行npm start，
// adb reverse tcp:8081 tcp:8081
// 点卡 App 即可