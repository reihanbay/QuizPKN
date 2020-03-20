/* eslint-disable no-console */
import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
// import { ENDPOINT } from '../../configs';
console.disableYellowBox = true;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <ScrollView>
          <ImageBackground source={images.bg.subMateri} style={styles.bg}>
            <Header back />
            <View style={styles.containerText}>
              <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri4')}</Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri4.section1')}</Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri4.section2')}</Text>
              <Text style={[styles.Content, styles.footerMarg]}>{I18n.t('isiMateri4.section3')}</Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </MainScreen>
    );
  }
}
