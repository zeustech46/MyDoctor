import {Text, View, StyleSheet, ImageBackground, Platform} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import Button from '../../components/atoms/Button/index';
import {fonts} from '../../utils/fonts/index';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View style={styles.ios}>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.distance} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  ios: {
    paddingTop: Platform.OS === 'ios' ? 40 : null,
  },
  title: {
    marginTop: 90,
    fontSize: 28,
    color: 'white',
    fontFamily: fonts.primary[400],
  },
  distance: {
    height: 16,
  },
});
