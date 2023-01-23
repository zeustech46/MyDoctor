import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DummyUser,
  IconRemovePhoto,
  IconMale,
  IconFemale,
} from '../../../assets';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function Profile({name, profession, remove, woman, man}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={DummyUser} style={styles.photo} />
        {remove && <IconRemovePhoto style={styles.icon} />}
        {woman && <IconMale style={styles.icon} />}
        {man && <IconFemale style={styles.icon} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 3,
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginTop: 16,
    color: colors.text.primary,
  },
  profession: {
    marginTop: 2,
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
  },
});
