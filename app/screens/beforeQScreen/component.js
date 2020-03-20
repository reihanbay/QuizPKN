/* eslint-disable global-require */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable consistent-return */
import React from 'react';
import { StatusBar, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import styles from './styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

console.disableYellowBox = true;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressBack = () => {
    this.props.navigation.navigate('Menu');
  };
  _onPressStart = () => {
    if (this.props.quizFinish === true) {
      this.props.navigation.navigate('QuizScreen');
    }
  };
  render() {
    return (
      <ImageBackground style={styles.bg} source={IMAGES.bg.quiz}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../../assets/gif/quizTime.gif')}
            style={{ width: scale(200), height: scale(200) }}
          />
          <Text
            style={{
              textAlign: 'center',
              margin: metrics.baseMargin,
              width: scale(280),
              padding: 0,
              fontSize: 24,
              fontWeight: '400',
              color: 'white'
            }}
          >
            Apakah Kamu Siap ?
          </Text>
          <TouchableOpacity
            onPress={this._onPressStart}
            style={{
              alignItems: 'center',
              width: scale(300),
              height: scale(50),
              margin: metrics.baseMargin,
              backgroundColor: '#FCA82F',
              borderRadius: 5
            }}
          >
            <Text
              style={{
                padding: 0,
                marginVertical: metrics.baseMargin,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                width: scale(300),
                height: scale(50)
              }}
            >
              Mulai
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressBack}
            style={{
              alignItems: 'center',
              width: scale(300),
              height: scale(50),
              margin: metrics.baseMargin,
              backgroundColor: '#D95353',
              borderRadius: 5
            }}
          >
            <Text
              style={{
                padding: 0,
                marginVertical: metrics.baseMargin,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                width: scale(300),
                height: scale(50)
              }}
            >
              Kembali
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
Component.propTypes = {
  // isLoading: true,
  navigation: PropTypes.object,
  quizFinish: PropTypes.bool
};
Component.defaultProps = {
  navigation: null,
  quizFinish: true
};
