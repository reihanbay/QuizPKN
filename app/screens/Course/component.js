import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import Card from '../../components/elements/cardCourse';
// import { ENDPOINT } from '../../configs';

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
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <ImageBackground source={images.bg.bg2} style={styles.bg}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{I18n.t('HAM')}</Text>
          </View>
          <ScrollView>
            <Card
              onPress={this._handleSubCourse1}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course1')}
              press={I18n.t('Learn')}
            />
            <Card
              onPress={this._handleSubCourse2}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course2')}
              press={I18n.t('Learn')}
            />
            <Card
              onPress={this._handleSubCourse3}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course3')}
              press={I18n.t('Learn')}
            />
            <Card
              onPress={this._handleSubCourse4}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course4')}
              press={I18n.t('Learn')}
            />
            <Card
              onPress={this._handleSubCourse5}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course5')}
              press={I18n.t('Learn')}
            />
            <Card
              onPress={this._handleSubCourse6}
              customContainer={styles.card}
              customText={styles.text}
              title={I18n.t('course6')}
              press={I18n.t('Learn')}
            />
          </ScrollView>
        </ImageBackground>
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
