import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import React from 'react';
import {colors} from '../../constants';

interface LoadingProps extends ActivityIndicatorProps {
  size?: number;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({
  color = colors.theme,
  size = 'large',
}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
