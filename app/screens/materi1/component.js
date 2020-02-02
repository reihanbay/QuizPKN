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
              <Text style={[styles.desc, styles.section]}>{I18n.t('isiMateri1.desc')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri1.sectionTitle1')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri1.section1')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri1.sectionTitle2')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri1.section2')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri1.sectionTitle3')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri1.section3')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri1.sectionTitle4')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri1.section4')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>
                {I18n.t('isiMateri1.sectionTitle5')}
              </Text>
              <Text style={[styles.Content]}>{I18n.t('isiMateri1.section5')}</Text>
              <Text style={[styles.desc, styles.section, styles.footerMarg]}>
                {I18n.t('isiMateri1.conclude')}
              </Text>
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
