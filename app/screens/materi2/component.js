import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Header from '../../components/elements/Header';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSubCourse1 = async () => {
    this.props.navigation.navigate('materi1');
  };
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <ScrollView>
          <ImageBackground source={images.bg.subMateri} style={styles.bg}>
          <Header back />
            <View style={styles.containerText}>
              <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri2')}</Text>
              <Text style={[styles.desc, styles.section]}>{I18n.t('isiMateri2.desc')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section1')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section2')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section3')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section4')}</Text>

              <Text style={[styles.mentionedContent, styles.section, styles.footerMarg]}>{I18n.t('isiMateri2.section5')}</Text>
            </View>
          </ImageBackground>
        </ScrollView>
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
