import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';

export default function HomeProfile({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Shayna Meilinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
