/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Image, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
// import StatusBar from '../../components/elements/StatusBar';
import Button from '../../components/elements/BtnMulti';
// import { COLOR_WHITE } from '../../styles';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handleCourse = async () => {
    this.props.navigation.navigate('Course');
  };
  _handleExam = async () => {
    this.props.navigation.navigate('Exam');
  };
  _handleQuiz = async () => {
    this.props.navigation.navigate('QuizScreen');
  };
  _handleAbout = async () => {
    this.props.navigation.navigate('About');
  };

  render() {
    return (
      <MainScreen style={styles.container}>
        <Container style={styles.container}>
          <Content>
            <ImageBackground source={images.bg.menu} style={styles.bg}>
              <View style={styles.header}>
                <Text style={styles.headerText1}>Halo {I18n.t('guest')},</Text>
                <Text style={styles.headerText2}>Ayo Mulai Belajar HAM</Text>
              </View>
              <Image source={images.logo} style={styles.logo} />
              <View style={styles.header}>
                <Text style={styles.headerText}>{I18n.t('sinau')}</Text>
              </View>
              <Button
                onPress={this._handleCourse}
                customContainer={[styles.button, styles.hijau]}
                customText1={styles.text1}
                customText2={styles.text2}
                showImg={styles.showImg}
                image={images.ic}
                title={I18n.t('menu.course.text')}
                desc={I18n.t('menu.course.textDesc')}
              />
              <Button
                onPress={this._handleExam}
                customContainer={[styles.button, styles.biru]}
                customText1={styles.text1}
                customText2={styles.text2}
                showImg={styles.showImg}
                image={images.exam}
                title={I18n.t('menu.exam')}
                desc={I18n.t('menu.examDesc')}
              />
              <Button
                onPress={this._handleQuiz}
                customContainer={[styles.button, styles.ungu]}
                customText1={styles.text1}
                customText2={styles.text2}
                showImg={styles.showImg}
                image={images.lat}
                title={I18n.t('menu.quiz')}
                desc={I18n.t('menu.quizDesc')}
              />
              <View style={styles.about}>
                <TouchableOpacity style={styles.touchMe} onPress={this._handleAbout}>
                  <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                    About Us
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </Content>
        </Container>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object
};
Component.defaultProps = {
  navigation: null
};
