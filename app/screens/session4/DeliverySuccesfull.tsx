import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DeliverySuccesfull = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);

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
        <TextInput placeholder={'Add feedback'} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Layout' as never)}
        className={
          'bg-[#0560FA] w-[342px] h-[46px] items-center rounded mt-20'
        }>
        <Text className={'text-white font-bold text-[16px] my-auto'}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverySuccesfull;
