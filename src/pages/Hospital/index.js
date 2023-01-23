import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {ILBackHospital} from '../../assets';
import {fonts} from '../../utils/fonts/index';
import {colors} from '../../utils/colors/index';
import ListHospitals from '../../components/molecules/ListHospitals/index';
import Gap from '../../components/atoms/Gap/index';
import {DummyHospital1} from '../../assets';
import {DummyHospital2} from '../../assets';
import {DummyHospital3} from '../../assets';

export default function Hospital() {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILBackHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Gap height={30} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListHospitals
            type="Rumah Sakit"
            name="Citra Bunga Merdeka"
            adress="Jln. Surya Sejahtera 20"
            pic={DummyHospital1}
          />
          <ListHospitals
            type="Rumah Sakit Anak"
            name="Happy Family & Kids"
            adress="Jln. Surya Sejahtera 20"
            pic={DummyHospital2}
          />
          <ListHospitals
            type="Rumah Sakit Jiwa"
            name="Tingkatan Paling Atas"
            adress="Jln. Surya Sejahtera 20"
            pic={DummyHospital3}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    overflow: 'hidden',
  },
  background: {
    paddingTop: 30,
    height: 240,
  },
  title: {
    paddingTop: Platform.OS === 'ios' ? 30 : null,
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[300],
  },
});
