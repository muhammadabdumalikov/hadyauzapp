import {textColors} from '@/constants/Colors';
import {View} from 'react-native';

export default function Divider() {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: textColors.grey4,
      }}
    />
  );
}
