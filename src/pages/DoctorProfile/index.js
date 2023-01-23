import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import Profile from '../../components/molecules/Profile/index';
import {colors} from '../../utils/colors/index';
import ProfileItem from '../../components/molecules/ProfileItem/index';
import Button from '../../components/atoms/Button/index';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header label="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Profile name="Nairobi Putri Hayza" profession="Dokter Anak" woman />
        <ProfileItem title="Alumnus" desc="Universitas Indonesia, 2020" />
        <ProfileItem title="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
        <ProfileItem title="No. STR" desc="00000116622081996" />
      </View>
      <View style={styles.button}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 30 : null,
  },
  button: {
    paddingTop: 50,
    paddingHorizontal: 40,
  },
});
