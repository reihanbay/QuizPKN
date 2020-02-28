/* eslint-disable import/first */
import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import Header from '../../components/elements/Header';
import StatusBar from '../../components/elements/StatusBar';
import Card from '../../components/elements/cardCourse';
import VideoPlayer from 'react-native-video-player';
// import { ENDPOINT } from '../../configs';
const VIMEO_ID = '179859217';
export default class Component extends React.Component {
  constructor(props) {
    super();

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
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <ImageBackground source={images.bg.materi} style={styles.bg}>
          <ScrollView>
            <Header course />
            <View style={styles.title}>
              <Text style={styles.titleText}>{I18n.t('HAM')}</Text>
            </View>
            <View style={{ marginTop: '5%', marginRight: '5%', marginLeft: '5%', width: '90%' }}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri: 'http://digitalcomb.com/cg-animation-vfx/wp-content/uploads/2014/02/Big-Buck-Bunny.jpg'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/reihanbay/script/02ed29ce7ff2352c9f9521b9a3b0f3b815b364f1/Materi tentang HAM PKN Kelas 12 SMA.mp4'
                }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
            </View>
          </ScrollView>
        </ImageBackground>
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
