import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={styles.img} source={require('../../assets/slide.png')} />
        </View>
        <View style={styles.slide1}>
          <Image style={styles.img} source={require('../../assets/slide.png')} />
        </View>
        <View style={styles.slide1}>
          <Image style={styles.img} source={require('../../assets/slide.png')} />
          <Button style={styles.start}>开始体验</Button>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  img:{
      width: '100%',
      height: '100%'
  },
  slide1: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  start: {
    bottom: 150,
    width: 120,
    height: 40,
    color: '#fff',
    textAlignVertical: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
