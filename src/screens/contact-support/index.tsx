/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import support from '@assets/img/assistant.png';
import {BaseView, ViewContainer} from '@components/view';
import Header from '@components/header';
import {Paragraph} from '@components/text/text';
import dayjs from 'dayjs';
import {AppTextInput} from '@components/TextInput';
import colors from '@utility/colors';

export const Support = () => {
  const [chats, setChats] = useState([...demoMessages]);
  const [message, setMessage] = useState('');

  const Message = (item: any) => {
    return (
      <View
        style={{
          width: '70%',
          alignSelf: item?.fromMe ? 'flex-end' : 'flex-start',
          marginTop: 20,
        }}>
        <View style={[styles.chat]}>
          <Paragraph textAlign={item?.fromMe ? 'right' : 'left'}>
            {item?.message}
          </Paragraph>
        </View>
        <Paragraph textAlign={item?.fromMe ? 'right' : 'left'}>
          {dayjs(item?.date).format('h:mm A')}
        </Paragraph>
      </View>
    );
  };

  const addMessage = () => {
    setChats([...chats, {message, fromMe: true, date: dayjs().date()}]);
  };

  return (
    <BaseView>
      <Header
        title="Contacts and support"
        hasBorder={false}
        hasRightItems={false}
      />
      <ViewContainer style={styles.container}>
        {!chats.length ? (
          <View style={styles.imgView}>
            <Image source={support} />
            <Paragraph>Have any issues? Chat with our operator</Paragraph>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{justifyContent: 'flex-end', flex: 1}}>
            {chats.map((ch: any) => (
              <Message {...ch} />
            ))}
          </ScrollView>
        )}
        <View style={styles.inputView}>
          <AppTextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Start a conversation.."
            multiline
          />
        </View>
      </ViewContainer>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputView: {
    marginTop: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chat: {
    padding: 14,
    backgroundColor: colors.accent,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 5,
  },
});

const demoMessages = [
  {
    message:
      'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    fromMe: false,
    date: dayjs().add(-1, 'day').date(),
  },
];
