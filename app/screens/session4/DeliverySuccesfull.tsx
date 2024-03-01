import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {IData} from '../session3/profile/statements/Statements.tsx';
import {supabase} from '../../supabase.ts';

interface Track {
  track: any;
}

const updateRow = async (trackNumber: any, comment: any, rating: any) => {
  const {data, error} = await supabase
    .from('Package')
    .update({comment, rating})
    .eq('track_number', trackNumber);

  if (error) {
    console.error('Error updating row:', error.message);
    return null;
  }

  return data;
};

const DeliverySuccesfull = () => {
  type RootStackParamList = {
    trackNumber: {trackNumber: Track};
  };

  type NewDataRouteProp = RouteProp<RootStackParamList, 'trackNumber'>;

  const navigation = useNavigation();
  const route = useRoute<NewDataRouteProp>();
  const trackNumber = route.params.trackNumber;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarPress = (index: number) => {
    setRating(index + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <Image
            className={'mx-1.5'}
            source={
              i < rating
                ? require('../../../assets/images/icons/star_filled.png')
                : require('../../../assets/images/icons/star.png')
            }
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <View className={'items-center'}>
      <Image
        className={'mt-36'}
        source={require('../../../assets/images/succesful.png')}
      />
      <Text className={'mt-16 text-[#3A3A3A] font-medium text-[24px]'}>
        Delivery Successful
      </Text>
      <Text className={'text-[#3A3A3A] mt-1'}>
        Your Item has been delivered successfully
      </Text>

      <Text className={'mt-12 text-[#0560FA]'}>Rate Rider</Text>
      <View className={'flex-row mt-4'}>{renderStars()}</View>
      <View
        className={
          'flex-row mt-6 items-center border border-gray-300 rounded w-[342px] h-[50px]'
        }>
        <Image
          className={'ml-3 mr-2'}
          source={require('../../../assets/images/icons/feedback-icon.png')}
        />
        <TextInput
          onChangeText={prev => setComment(prev)}
          maxLength={10}
          placeholder={'Add feedback'}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Layout' as never);
          updateRow(trackNumber, comment, rating);
        }}
        className={
          'bg-[#0560FA] w-[342px] h-[46px] items-center rounded mt-20'
        }>
        <Text className={'text-white font-bold text-[16px] my-auto'}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverySuccesfull;
