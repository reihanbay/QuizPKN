/* eslint-disable no-console */
/* eslint-disable import/first */
import React from 'react';
import { ScrollView, Text, View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import { Container, Content } from 'native-base';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import Header from '../../components/elements/Header';
import StatusBar from '../../components/elements/StatusBar';
import Button from '../../components/elements/BtnMulti';
// import { ENDPOINT } from '../../configs';
console.disableYellowBox = true;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSubCourse1 = async () => {
    this.props.navigation.navigate('materi1');
  };
  _handleSubCourse2 = async () => {
    this.props.navigation.navigate('materi2');
  };
  _handleSubCourse3 = async () => {
    this.props.navigation.navigate('materi3');
  };
  _handleSubCourse4 = async () => {
    this.props.navigation.navigate('materi4');
  };
  _handleSubCourse5 = async () => {
    this.props.navigation.navigate('materi5');
  };
  _handleSubCourse6 = async () => {
    this.props.navigation.navigate('materi6');
  };
  _handleVidCourse = async () => {
    this.props.navigation.navigate('vidCourse');
  };
  render() {
    return (
      <MainScreen style={styles.container}>
        <Container style={styles.container}>
          <Content>
            <StatusBar />
            <ImageBackground source={images.bg.materi} style={styles.bg}>
              <ScrollView>
                <Header back />
                <View style={styles.title}>
                  <Text style={styles.titleText}>{I18n.t('menu.course.text')}</Text>
                </View>
                <Button
                  onPress={this._handleSubCourse1}
                  customContainer={[styles.button, styles.me]}
                  customText1={styles.text1}
                  title={I18n.t('course1')}
                />
                <Button
                  onPress={this._handleSubCourse2}
                  customContainer={[styles.button, styles.ji]}
                  customText1={styles.text1}
                  title={I18n.t('course2')}
                />
                <Button
                  onPress={this._handleSubCourse3}
                  customContainer={[styles.button, styles.ku]}
                  customText1={styles.text1}
                  title={I18n.t('course3')}
                />
                <Button
                  onPress={this._handleSubCourse4}
                  customContainer={[styles.button, styles.hi]}
                  customText1={styles.text1}
                  title={I18n.t('course4')}
                />
                <Button
                  onPress={this._handleSubCourse5}
                  customContainer={[styles.button, styles.bi]}
                  customText1={styles.text1}
                  title={I18n.t('course5')}
                />
                <Button
                  onPress={this._handleSubCourse6}
                  customContainer={[styles.button, styles.ni]}
                  customText1={styles.text1}
                  title={I18n.t('course6')}
                />
              </ScrollView>
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
