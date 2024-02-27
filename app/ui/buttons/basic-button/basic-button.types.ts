import {TouchableOpacityProps} from 'react-native';

export interface IBigBlueButtonProps {
  disable?: boolean;
}

type BigBlueButtonTypes = TouchableOpacityProps & IBigBlueButtonProps;

export interface IBasicButton extends BigBlueButtonTypes {}
