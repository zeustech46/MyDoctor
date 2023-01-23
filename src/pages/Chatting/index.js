import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index';
import ChatItem from '../../components/molecules/ChatItem/index';
import InputChat from '../../components/molecules/InputChat/index';
import {colors} from '../../utils/colors/index';
import {fonts} from '../../utils/fonts/index';

export default function Chatting({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        label="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : null,
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
  },
  date: {
    marginTop: 20,
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
});
