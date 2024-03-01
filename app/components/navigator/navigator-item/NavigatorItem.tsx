import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import home from '../../../../assets/images/navigator-icons/home.png';
import homeSelected from '../../../../assets/images/navigator-icons/homeSelected.png';
import profile from '../../../../assets/images/navigator-icons/profile.png';
import profileSelected from '../../../../assets/images/navigator-icons/profileSelected.png';
import track from '../../../../assets/images/navigator-icons/track.png';
import trackSelected from '../../../../assets/images/navigator-icons/trackSelected.png';
import wallet from '../../../../assets/images/navigator-icons/wallet.png';
import walletSelected from '../../../../assets/images/navigator-icons/walletSelected.png';

const imageMap: {[key: string]: any} = {
  home: home,
  homeSelected: homeSelected,
  profile: profile,
  profileSelected: profileSelected,
  track: track,
  trackSelected: trackSelected,
  wallet: wallet,
  walletSelected: walletSelected,
};

interface INavigatorItemProps {
  imgName: string;
  text: string;
  onChange: any;
  selected: boolean;
}

const NavigatorItem: FC<INavigatorItemProps> = ({
  imgName,
  text,
  onChange,
  selected,
}) => {
  const source = imageMap[imgName];
  return (
    <TouchableOpacity onPress={() => onChange(imgName)}>
      <View
        className={
          selected
            ? 'flex-col pt-1 w-[41px] h-[41px] items-center border-t-2 border-[#0560FA]'
            : 'flex-col pt-1 w-[41px] h-[41px] items-center '
        }>
        <Image source={source} className={'w-[24px] h-[24px] mx-auto'} />
        <Text className={'text-[12px]'}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavigatorItem;
