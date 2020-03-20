/* eslint-disable consistent-return */
import React from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Exam from '../../components/elements/Exam';
import ButtonText from '../../components/elements/btnText';
import IMAGES from '../../configs/images';
import styles from './styles';

console.disableYellowBox = true;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examFinish: false,
      score: 0
    };
  }

  _onPressBack = () => {
    this.props.navigation.goBack();
  };
  _onPressBahas = () => {
    this.props.navigation.navigate('ExamResult');
  };
  _backToMenu = () => {
    this.props.navigation.navigate('Menu');
  };
  _examFinish(score) {
    this.setState({ examFinish: true, score });
  }
  _button() {
    const Text1 = 'Menu Awal';
    const Text2 = 'Pembahasan';
    return (
      <View style={styles.btn}>
        <ButtonText customContainer={styles.back} onPress={() => this._backToMenu()} text={Text1} />
        <ButtonText customContainer={styles.next} onPress={() => this._onPressBahas()} text={Text2} />
      </View>
    );
  }
  _scoreMessage(score) {
    if (score <= 30) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>You Must Study Very Hard!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="#FCA82F" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    } else if (score > 30 && score < 60) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>You Must Study Hard!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="#FCA82F" />
            <Icon name="trophy" size={40} color="#FCA82F" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    } else if (score >= 60) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Congratulations!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="#FCA82F" />
            <Icon name="trophy" size={40} color="#FCA82F" />
            <Icon name="trophy" size={40} color="#FCA82F" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <ImageBackground style={styles.bg} source={IMAGES.bg.quiz}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          {this.state.examFinish ? (
            <View style={styles.container}>
              <View style={styles.result}>{this._scoreMessage(this.state.score)}</View>
              {this._button()}
            </View>
          ) : (
            <Exam examFinish={score => this._examFinish(score)} />
          )}
        </View>
      </ImageBackground>
    );
  }
}
Component.propTypes = {
  // isLoading: true,
  navigation: PropTypes.object
};
Component.defaultProps = {
  navigation: null
};
