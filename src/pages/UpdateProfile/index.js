import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import Profile from '../../components/molecules/Profile/index';
import {colors} from '../../utils/colors/index';
import Input from '../../components/atoms/Input/index';
import Button from '../../components/atoms/Button/index';
import Gap from '../../components/atoms/Gap/index';

export default function UpdateProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header label="Update Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile remove />
          <Input label="Full Name" />
          <Gap height={26} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 80,
  },
});
