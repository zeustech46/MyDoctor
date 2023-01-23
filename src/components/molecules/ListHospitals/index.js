import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts/index';
import {colors} from '../../../utils/colors/index';

export default function ListHospitals({type, name, adress, pic}) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.imageHospital} />
      <View>
        <Text style={styles.titleHospital}>{type}</Text>
        <Text style={styles.titleHospital}>{name}</Text>
        <Text style={styles.desc}>{adress}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  imageHospital: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  titleHospital: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: fonts.primary[200],
  },
});
