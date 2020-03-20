/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable import/first */
import React from 'react';
import { ImageBackground, WebView, Text, View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import { Container, Content } from 'native-base';
import Header from '../../components/elements/Header';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import metrics from '../../constants/metrics';

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
        <Container>
          <Content>
            <ImageBackground source={images.bg.subMateri} style={styles.bg}>
              <Header back />
              <View style={{ width: '90%', height: 280, marginHorizontal: metrics.doubleBaseMargin }}>
                <WebView
                  style={styles.WebViewStyle}
                  source={{ uri: 'https://www.youtube.com/embed/6XYpTkry9P8' }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  allowsFullscreenVideo={true}
                />
              </View>
              <View style={styles.containerText}>
                <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri3')}</Text>
                <Text style={[styles.desc, styles.section, styles.footerMarg]}>
                  {I18n.t('isiMateri3.desc')}
                </Text>
              </View>
            </ImageBackground>
          </Content>
        </Container>
      </MainScreen>
    );
  }
}
