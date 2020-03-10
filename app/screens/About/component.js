/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Image, View, Text, ScrollView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../../components/elements/Header';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import images from '../../configs/images';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <Container style={styles.container}>
          <ImageBackground source={images.bg.menu} style={styles.bg}>
            <Content>
              <ScrollView>
                <Header back />
                <View style={styles.title}>
                  <Text style={styles.text}>{I18n.t('about')}</Text>
                </View>
                <View style={styles.about}>
                  <View style={styles.pic}>
                    <Image source={images.pic1} style={styles.picture} />
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.name}>Timotius Muliawan</Text>
                    <Text style={styles.self}>Product Designer</Text>
                    <Text style={styles.mail}>timotiusmuliawan05@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.about}>
                  <View style={styles.pic}>
                    <Image source={images.pic2} style={styles.picture} />
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.name}>Reihan Bayzaky</Text>
                    <Text style={styles.self}>Android Developer</Text>
                    <Text style={styles.mail}>bung.reihan28@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.about}>
                  <View style={styles.pic}>
                    <Image source={images.pic3} style={styles.picture} />
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.name}>Rizka Salma Adelia</Text>
                    <Text style={styles.self}>Android Developer</Text>
                    <Text style={styles.mail}>rizkasalmaadelia@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.about}>
                  <View style={styles.pic}>
                    <Image source={images.pic4} style={styles.picture} />
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.name}>Rianita Dwi Pangestu</Text>
                    <Text style={styles.self}>Content Writer</Text>
                    <Text style={styles.mail}>rianitadwipangestu99@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.about}>
                  <View style={styles.pic}>
                    <Image source={images.pic5} style={styles.picture} />
                  </View>
                  <View style={styles.desc}>
                    <Text style={styles.name}>Reynozaky Nur Rahadian</Text>
                    <Text style={styles.self}>Content Writer</Text>
                    <Text style={styles.mail}>reynozakynr111@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.iklan}>
                  <Text style={styles.sup}>Support By</Text>
                  <TouchableOpacity
                    style={styles.touchMe}
                    onPress={() => Linking.openURL('https://www.smktelkom-pwt.sch.id')}
                  >
                    <View style={styles.pic}>
                      <Image source={images.smk} style={styles.pict} />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Content>
          </ImageBackground>
        </Container>
      </MainScreen>
    );
  }
}
