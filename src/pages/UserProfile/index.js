import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import Profile from '../../components/molecules/Profile/index';
import List from '../../components/molecules/List/index';
import {colors} from '../../utils/colors/index';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header label="Profile" onPress={() => navigation.goBack()} />
      <Profile name="Shayna Meilinda" profession="Product Designer" />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => {
          navigation.navigate('UpdateProfile');
        }}
      />
      <List
        name="Language"
        desc="Available 12 Languages"
        type="next"
        icon="language"
      />
      <List name="Rate" desc="On Google Play Store" type="next" icon="rate" />
      <List
        name="Help Center"
        desc="Read Our Guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 30 : null,
    backgroundColor: colors.white,
    flex: 1,
  },
});
