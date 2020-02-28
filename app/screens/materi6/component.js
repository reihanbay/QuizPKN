/* eslint-disable import/first */
import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import VideoPlayer from 'react-native-video-player';
// import { ENDPOINT } from '../../configs';

const VIMEO_ID = '179859217';
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined
    };
  }

  componentDidMount() {
    global
      .fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video
        })
      );
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
            <View style={{ marginTop: '5%', marginRight: '5%', marginLeft: '5%', width: '90%' }}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri:
                    'https://rawcdn.githack.com/reihanbay/script/91c9a5c5825c94e9b056123923d9a5e845a7875a/hub.png'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/reihanbay/script/91c9a5c5825c94e9b056123923d9a5e845a7875a/6.Hubungan Pancasila dengan HAM.mp4'
                }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
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
