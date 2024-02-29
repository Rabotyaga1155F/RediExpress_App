import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../../../components/header/Header.tsx';
import FindInput from '../../../ui/inputs/find-input/FindInput.tsx';
import ChatListItem from '../../../components/chat-list-item/ChatListItem.tsx';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../../supabase.ts';

interface Chat {
  id: any;
}

interface ChatUser {
  id: any;
}

interface ChatsData {
  chatsData: any[];
  usersData: any[];
}

const ChatsScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<any>();
  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const {data} = await supabase.auth.getUser();
      setUser(data);
    };
    fetch();
  }, []);

  async function getAllChats(): Promise<ChatsData> {
    try {
      const {data: chatsData, error: chatsError} = await supabase
        .from('chats')
        .select('*');
      if (chatsError) {
        console.error('Error fetching chat data:', chatsError.message);
        return {chatsData: [], usersData: []};
      }

      const {data: usersData, error: usersError} = await supabase
        .from('chats_users')
        .select('*');

      if (usersError) {
        console.error('Error fetching chat users:', usersError.message);
        return {chatsData: [], usersData: []};
      }

      return {chatsData: chatsData || [], usersData: usersData || []};
    } catch (error) {
      console.error('Error fetching data:', error);
      return {chatsData: [], usersData: []};
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {chatsData, usersData} = await getAllChats();
        setChats(chatsData);
        console.log(usersData);
        console.log(chatsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const subscription = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'chats'},
        async () => {
          console.log('chats changed');
          fetchData();
        },
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const getUserNameById = (userId: any) => {
    if (!chats.usersData) {
      return 'Loading...';
    }
    const userData = chats.usersData.find(
      (user: any) => user.user_id === userId,
    );
    return userData ? userData.name : 'Unknown';
  };

  return (
    <View>
      <Header
        headerName={'Chats'}
        onBackButtonPress={() => navigation.goBack()}
      />
      <View className={'mx-6'}>
        <View className={'-mt-6'}>
          <FindInput placeholder={'Search for a driver'} />
          <ChatListItem name={'Chinonso James'} />
        </View>
      </View>
    </View>
  );
};

export default ChatsScreen;
