import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Header from '../../components/elements/Header';
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
                  uri: 'https://rawcdn.githack.com/reihanbay/script/91c9a5c5825c94e9b056123923d9a5e845a7875a/Macam.png'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/reihanbay/script/91c9a5c5825c94e9b056123923d9a5e845a7875a/2.Macam macam HAM dan contohnya.mp4'
                }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
            </View>
            <View style={styles.containerText}>
              <Text style={[styles.titleText, styles.sectionTitle]}>{I18n.t('judulMateri2')}</Text>
              <Text style={[styles.desc, styles.section]}>{I18n.t('isiMateri2.desc')}</Text>
              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section1')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section2')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section3')}</Text>

              <Text style={[styles.mentionedContent, styles.section]}>{I18n.t('isiMateri2.section4')}</Text>

              <Text style={[styles.mentionedContent, styles.section, styles.footerMarg]}>
                {I18n.t('isiMateri2.section5')}
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
