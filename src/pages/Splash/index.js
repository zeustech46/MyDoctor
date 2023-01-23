import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors} from '../../utils/colors/index';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ILLogo />
        <Text style={styles.title}>My Doctor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
  },
});
