/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-plusplus */
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Container, Content } from 'native-base';
import MainScreen from '../../components/layouts/MainScreen';
import { IMAGES } from '../../configs';
import styles from './styles';
import Animbutton from '../../components/elements/BtnAnimate';
import Button from '../../components/elements/btnQuiz';
// import I18n from '../../i18n';
// import StatusBar from '../../components/elements/StatusBar';

let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option2',
        options: {
          option1: 'Hukum yang berlaku',
          option2: 'Hak asasi manusia',
          option3: 'Kehakiman',
          option4: 'Peradilan'
        },
        question: '1. Berikut ini yang tidak termasuk lembaga peradilan HAM yaitu…',
        answer:
          'Karena dilihat dari namanya saja sudah mengandung kata Hak Asasi Manusia yang sudah mewakili tujuan dari komisi nasional tersebut.'
      },
      question2: {
        correctoption: 'option4',
        options: {
          option1: '32',
          option2: '33',
          option3: '34',
          option4: '35'
        },
        question: '2.Jumlah anggota komnas HAM yaitu sebanyak … orang',
        answer:
          'Pasal 82 ayat (1): Anggota Komnas HAM berjumlah 35 (tiga puluh lima) orang yang dipilih oleh Dewan Perwakilan Rakyat Republik Indonesia berdasarkan usulan Komnas HAM dan diresmikan oleh Presiden selaku Kepala Negara.'
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: 'Pengkhianatan',
          option2: 'Pembunuhan',
          option3: 'Penyiksaan',
          option4: 'Penganiayaan'
        },
        question: '3. Berikut yang tidak termasuk pelanggaran HAM adalah ...',
        answer:
          'Berdasarkan sifatnya, pelanggaran HAM di bagi menjadi 2 yakni:\n1. Pelanggaran HAM Berat\nMerupakan pelanggaran HAM yang bisa membahayakan atau mengancam nyawa orang lain. Pada penggolongan ini termasuk sebuah perbuatan besar dan di pastikan mendapatkan hukuman yang sepadan sesuai dengan tingkatan pelanggaran yang dilakukan. Beberapa diantaranya yakni ada perbudakan, pembunuhan, penyanderaan, perampokan dan lain sebagainya. Kiranya anda harus mengerti tentang pengertian HAM terlebih dahulu untuk memberikan pemahaman dalam jenis pelanggaran HAM berat ini.\n2. Pelanggaran HAM Ringan\nMerupakan sebuah kasus pelanggaran HAM yang ringan dimana tidak sampai mengancam keselamatan jiwa orang. Akan tetapi, ini tetap saja termasuk dalam kategori berbahaya apabila dalam jangka waktu yang lama. Sehingga sangat penting untuk segera diatasi supaya tidak ada pelanggaran yang lainnya. Beberapa contoh pelanggaran HAM ringan yakni pencemaran lingkungan secara sengaja, penggunaan bahan berbahaya pada makanan yang disengaja'
      },
      question4: {
        correctoption: 'option3',
        options: {
          option1: 'Hanya ada lima agama yang diakui oleh negara',
          option2: 'Negara berdasarkaan atas ketuhanaan Yang Maha Esa',
          option3: 'Adanya jaminan hukum kebebasan dalam beragama oleh negara',
          option4: 'Hak hidup dan mempertahankan hidup dan kehidupannya'
        },
        question: '4. Makna yang terkandung dalam pasal 29 ayat 2 uud 1945 adalah ...',
        answer:
          'Pasal 29 ayat 2 UUD 1945 : Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan untuk beribadat menurut agamanya dan kepercayaannya itu.'
      },
      question5: {
        correctoption: 'option1',
        options: {
          option1: 'Undang-undang Nomor 39 Tahun 1999',
          option2: 'George Jellineck',
          option3: 'Sudargo Gautama',
          option4: 'L.J Van Apeldroon'
        },
        question:
          '5. Hak asasi manusia (HAM) adalah seperangkat hak yang melekat pada keberadaan manusia sebagai makhluk Tuhan Yang Maha Esa dan merupakan anugerah-Nya yang wajib dihormati, dijunjung tinggi dan     dilindungi oleh negara. Hal tersebut pengertian HAM menurut...',
        answer: 'Karena sudah jelas tertera di undang undang'
      },
      question6: {
        correctoption: 'option4',
        options: {
          option1: 'Hanya ada lima agama yang di akui okeh negara',
          option2: 'Negara berdasarkan atas ketuhanan Yang Maha Esa',
          option3: 'Adanya jaminan hukum kebebasan dalam beragama oleh negara',
          option4: 'Hak untuk hidup dan mempertahankan hidup dan kehidupanny'
        },
        question: '6. Makna yang terkandung dalam pasal 28 A UUD 1945 di antaranya ...',
        answer:
          'Pasal 28A UUD 1945 berisi : Setiap orang berhak untuk hidup serta berhak mempertahankan hidup dan kehidupannya.'
      },
      question7: {
        correctoption: 'option3',
        options: {
          option1: '28D',
          option2: '28B',
          option3: '28A',
          option4: '28C'
        },
        question:
          '7.  Setiap manusia berhak hidup dan mempertahankan hidup. Hal tersebut tercantum pada  pasal…',
        answer:
          'Pasal 28A UUD 1945 berisi : Setiap orang berhak untuk hidup serta berhak mempertahankan hidup dan kehidupannya.'
      },
      question8: {
        correctoption: 'option3',
        options: {
          option1: 'Membiayai pendidikan anak yang putus sekolah',
          option2: 'Membantu fakir miskin',
          option3: 'Tidak mengaggu orang yang sedang beribadah',
          option4: 'Memberikan sumbangan kepada korban bencana alam'
        },
        question: '8. Berikut ini merupakan contoh perhormatan terhadap hak asasi orang lain yaitu...',
        answer:
          'Karena HAM dibagi menjadi hak sipil dan politik yang berkenaan dengan kebebasan sipil (misalnya hak untuk hidup, hak untuk tidak disiksa, dan kebebasan berpendapat), serta hak ekonomi, sosial, dan budaya yang berkaitan dengan akses ke barang publik (seperti hak untuk memperoleh pendidikan yang layak, hak atas kesehatan, atau hak atas perumahan).'
      },
      question9: {
        correctoption: 'option1',
        options: {
          option1: 'Membayar pajak',
          option2: 'Kebebasan memeluk agama',
          option3: 'Ikut serta membela negara',
          option4: 'Mendapatkan pengajaran/pendidikan'
        },
        question: '9. Berikut hak yang dimiliki WNI kecuali..',
        answer: 'Karena Membayar pajak karena itu merupakan kewajiban WNI.'
      },
      question10: {
        correctoption: 'option4',
        options: {
          option1: 'Peradilan',
          option2: 'Social',
          option3: 'Hukum',
          option4: 'Politik'
        },
        question:
          '10. Penggunaan hak pilih dalam kegiatan Pemilihan Umum merupakan hak asasi dalam  bidang ….',
        answer: 'Karena Pemilihan Umum meerupakan kegiatan politik.'
      }
    }
  }
};
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;
    this.incorrect = 0;
    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(k => jdata[k]);
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      // correctoption: arrnew[this.qno].correctoption,
      answer: arrnew[this.qno].answer,
      countCheck: 0
    };
  }

  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        // correctoption: arrnew[this.qno].correctoption,
        answer: arrnew[this.qno].answer
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        answer: arrnew[this.qno].answer
      });
    } else {
      return (
        <MainScreen>
          <Container>
            <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
              <Content style={styles.Container}>
                <View style={styles.btn}>
                  <Button customContainer={styles.back} onPress={() => this._backToMenu()} text="Menu Awal" />
                </View>
              </Content>
            </ImageBackground>
          </Container>
        </MainScreen>
      );
    }
  }
  render() {
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(k => (
      <View key={k} style={{ margin: 10 }}>
        <Animbutton
          countCheck={this.state.countCheck}
          onColor="#FCA82F"
          effect="flash"
          text={currentOptions[k]}
        />
      </View>
    ));

    return (
      <MainScreen>
        <Container>
          <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
            <Content style={styles.Container}>
              <View style={styles.questContainer}>
                <Text style={styles.quest}>{this.state.question}</Text>
              </View>
              <View>{options}</View>
              <View style={styles.bahas}>
                <Text style={styles.titlePembahasan}>Pembahasan :</Text>
                <Text style={styles.pembahasan}>{this.state.answer}</Text>
              </View>
              <View style={styles.btn}>
                <Button back backBtn customContainer={styles.back} onPress={() => this.prev()} />
                <Button next nextBtn customContainer={styles.next} onPress={() => this.next()} />
              </View>
            </Content>
          </ImageBackground>
        </Container>
      </MainScreen>
    );
  }
}
Component.propTypes = {
  // isLoading: true,
};
Component.defaultProps = {};
