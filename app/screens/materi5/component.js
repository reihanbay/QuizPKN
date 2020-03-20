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
              <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri5')}</Text>
              <Text style={[styles.desc, styles.section]}>{I18n.t('isiMateri5.desc')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri5.sectionTitle1')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri5.section1')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri5.sectionTitle2')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri5.section2')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri5.sectionTitle3')}
              </Text>
              <Text style={[styles.Content, styles.section]}>{I18n.t('isiMateri5.section4')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection4a')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection4b')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection4c')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection4d')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection4e')}</Text>
              <Text style={[styles.Content, styles.section]}>{I18n.t('isiMateri5.section5')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection5a')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection5b')}</Text>
              <Text style={[styles.subSection]}>{I18n.t('isiMateri5.subSection5c')}</Text>
              <Text style={[styles.subSection, styles.footerMarg]}>{I18n.t('isiMateri5.subSection5d')}</Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </MainScreen>
    );
  }
}
