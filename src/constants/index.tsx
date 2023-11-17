import {Dimensions, PixelRatio} from 'react-native';

export const colors = {
  theme: '#FFA500',
  secondary: '#FA5B3E',
  shadow_color: 'rgb(110,142,204)',

  white: '#FFFFFF',
  black_night: '#0C090A',
  black_matte: '#28282B',
};

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export default function getResponsiveValue(baseValue: number): number {
  const referenceScreenHeight: number = 812;

  const heightFactor: number = SCREEN_HEIGHT / referenceScreenHeight;

  const responsiveValue: number = baseValue * heightFactor;

  return PixelRatio.roundToNearestPixel(responsiveValue);
}
