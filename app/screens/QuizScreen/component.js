/* eslint-disable consistent-return */
import React from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz from '../../components/elements/Quiz';
import Button from '../../components/elements/btnQuiz';
import IMAGES from '../../configs/images';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizFinish: false,
      score: 0
    };
  }
  _backToMenu = () => {
    this.props.navigation.navigate('Menu');
  };
  _tryAgain = () => {
    this.props.navigation.navigate('QuizScreen');
  };
  _quizFinish(score) {
    this.setState({ quizFinish: true, score });
  }
  _button() {
    return (
      <View style={styles.btn}>
        <Button customContainer={styles.back} onPress={() => this._backToMenu()}>
          <Text style={styles.nav}>Menu Utama</Text>
        </Button>
        <Button customContainer={styles.next} onPress={() => this._tryAgain()}>
          <Text style={styles.nav}>Coba Lagi</Text>
        </Button>
      </View>
    );
  }
  _scoreMessage(score) {
    if (score <= 30) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>You Must Study Harder</Text>
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
          <Text style={styles.header}>Congratulations!</Text>
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
          {/* <View style={styles.toolbar}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Text style={styles.toolbarButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle} />
          <Text style={styles.toolbarButton} />
        </View> */}
          {this.state.quizFinish ? (
            <View style={styles.container}>
              <View style={styles.result}>{this._scoreMessage(this.state.score)}</View>
              {this._button()}
            </View>
          ) : (
            <Quiz quizFinish={score => this._quizFinish(score)} />
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
