import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILCatUmum, ILCatPsikiater, ILCatObat, ILCatAnak} from '../../../assets';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function DoctorCategory({category, onPress}) {
  const Icon = () => {
    if (category === 'Dokter Umum') {
      return <ILCatUmum />;
    }
    if (category === 'Psikiater') {
      return <ILCatPsikiater />;
    }
    if (category === 'Dokter Obat') {
      return <ILCatObat />;
    }
    if (category === 'Dokter Anak') {
      return <ILCatAnak />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <View>
        <Text style={styles.label}>Saya Butuh</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    paddingTop: 24,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.primary,
  },
});
