import {StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconMessages,
  IconMessagesActive,
  IconHospital,
  IconHospitalActive,
} from '../../../assets/icon';
import {colors} from '../../../utils/colors/index';
import {fonts} from '../../../utils/fonts/index';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospital') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 10 : 3,
  },
  title: active => ({
    fontSize: 10,
    color: active ? colors.text.MenuActive : colors.text.MenuInActive,
    fontFamily: fonts.primary[500],
    marginTop: 4,
  }),
});
