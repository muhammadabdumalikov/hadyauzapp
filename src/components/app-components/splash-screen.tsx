import {View} from '../Themed';
import {Chase} from 'react-native-animated-spinkit';
import {LinearWrapper} from './linear-wrapper';

export default function CustomSplashScreen() {
  return (
    <LinearWrapper
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 368,
          height: 421,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparency',
        }}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            zIndex: 3,
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            backgroundColor: 'transparency',
          }}>
          <SplashScreenDots />
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            zIndex: 2,
            left: 0,
            bottom: 0,
            right: 0,
            top: 0,
            backgroundColor: 'transparency',
          }}>
          <SplashScreenGift />
        </View>
      </View>
      <Chase color={textColors.pureWhite} style={{marginTop: 120}} />
    </LinearWrapper>
  );
}
