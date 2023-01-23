import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function IsMe() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text>Ibu Dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  chatContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    maxWidth: '80%',
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
