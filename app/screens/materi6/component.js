import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
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
          <ImageBackground source={images.bg.bgCourse} style={styles.bg}>
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
