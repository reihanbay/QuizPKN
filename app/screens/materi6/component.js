/* eslint-disable no-console */
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
                  source={{ uri: 'https://www.youtube.com/embed/-1tlB8uZjwk' }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  allowsFullscreenVideo={true}
                />
              </View>
              <View style={styles.containerText}>
                <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri1')}</Text>
                <Text style={[styles.mentionedContent, styles.section]}>
                  {I18n.t('isiMateri6.sectionTitle1')}
                </Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section1a')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section1b')}</Text>
                <Text style={[styles.mentionedContent, styles.section]}>
                  {I18n.t('isiMateri6.sectionTitle2')}
                </Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section2a')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section2b')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section2c')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section2d')}</Text>
                <Text style={[styles.mentionedContent, styles.section]}>
                  {I18n.t('isiMateri6.sectionTitle3')}
                </Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section3a')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section3b')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section3c')}</Text>
                <Text style={[styles.mentionedContent, styles.section]}>
                  {I18n.t('isiMateri6.sectionTitle4')}
                </Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section4a')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section4b')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section4c')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section4d')}</Text>
                <Text style={[styles.mentionedContent, styles.section]}>
                  {I18n.t('isiMateri6.sectionTitle5')}
                </Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section5a')}</Text>
                <Text style={[styles.Content]}>{I18n.t('isiMateri6.section5b')}</Text>
                <Text style={[styles.Content, styles.footerMarg]}>{I18n.t('isiMateri6.section5c')}</Text>
              </View>
            </ImageBackground>
          </Content>
        </Container>
      </MainScreen>
    );
  }
}
