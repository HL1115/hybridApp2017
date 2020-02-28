import React,{Component,useState} from 'react';
import {Text,View,Button} from 'react-native';

const Counter  = () => {
    let [num,setNum] = useState(0);
    return (
        <View>
            <Text>{num}</Text>
            <Button onPress={()=>{setNum(num+1)}} title="点击+1"/>
        </View>
    )
}
export default Counter;

// export default class Counter extends Component{

//     render(){
//         <View>
//             <Text></Text>
//             <Button/>
//         </View>
//     }
// }