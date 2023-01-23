import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors/index';
import Button from '../../atoms/Button/index';
import {DummyDoctor1} from '../../../assets';
import {fonts} from '../../../utils/fonts/index';

export default function DarkProfile({type, onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Nairobi Putri Hayza</Text>
      </View>
      <Image source={DummyDoctor1} style={styles.imageProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  imageProfile: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
});
