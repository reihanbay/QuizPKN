/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable import/first */
import React from 'react';
import { ImageBackground, WebView, ScrollView, Text, View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import { Container, Content } from 'native-base';
import Header from '../../components/elements/Header';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import metrics from '../../constants/metrics';

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
            <ScrollView>
              <ImageBackground source={images.bg.subMateri} style={styles.bg}>
                <Header back />
                <View style={{ width: '90%', height: 280, marginHorizontal: metrics.doubleBaseMargin }}>
                  <WebView
                    style={styles.WebViewStyle}
                    source={{ uri: 'https://www.youtube.com/embed/4Go7OnLf6QM' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsFullscreenVideo={true}
                  />
                </View>
                <View style={styles.containerText}>
                  <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri1')}</Text>
                  <Text style={[styles.desc, styles.section]}>{I18n.t('isiMateri1.desc')}</Text>
                  <Text style={[styles.mentionedContent, styles.section]}>
                    {I18n.t('isiMateri1.sectionTitle1')}
                  </Text>
                  <Text style={[styles.desc]}>{I18n.t('isiMateri1.section1')}</Text>
                  <Text style={[styles.mentionedContent, styles.section]}>
                    {I18n.t('isiMateri1.sectionTitle2')}
                  </Text>
                  <Text style={[styles.desc]}>{I18n.t('isiMateri1.section2')}</Text>
                  <Text style={[styles.mentionedContent, styles.section]}>
                    {I18n.t('isiMateri1.sectionTitle3')}
                  </Text>
                  <Text style={[styles.desc]}>{I18n.t('isiMateri1.section3')}</Text>
                  <Text style={[styles.mentionedContent, styles.section]}>
                    {I18n.t('isiMateri1.sectionTitle4')}
                  </Text>
                  <Text style={[styles.desc]}>{I18n.t('isiMateri1.section4')}</Text>
                  <Text style={[styles.mentionedContent, styles.section]}>
                    {I18n.t('isiMateri1.sectionTitle5')}
                  </Text>
                  <Text style={[styles.desc]}>{I18n.t('isiMateri1.section5')}</Text>
                  <Text style={[styles.desc, styles.section, styles.footerMarg]}>
                    {I18n.t('isiMateri1.conclude')}
                  </Text>
                </View>
              </ImageBackground>
            </ScrollView>
          </Content>
        </Container>
      </MainScreen>
    );
  }
}
