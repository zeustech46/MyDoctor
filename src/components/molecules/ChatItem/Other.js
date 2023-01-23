import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';
import {DummyDoctor5} from '../../../assets';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor5} style={styles.imageProfile} />
      <View>
        <View style={styles.chatContent}>
          <Text>Ibu Dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  imageProfile: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 5,
  },
  chatContent: {
    backgroundColor: colors.primary,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    maxWidth: '80%',
    borderBottomLeftRadius: 0,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
