import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from 'react-native-svg';
import {
  UrbanistBoldText,
  UrbanistBlackText,
  UrbanistSemiboldText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';

export function WelcomeScreen({navigation}) {
  useEffect(() => {
    // Set a delay of 3 seconds before navigating
    const timeout = setTimeout(() => {
      navigation.replace('screens/onboarding-screens'); // Replace to remove this screen from the stack
    }, 3000); // 3 seconds
    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.container}
      source={require('@/assets/images/welcome.png')}>
      <LinearGradient
        colors={['rgba(58, 58, 58, 0)', 'rgba(44, 44, 44, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}} // From top to bottom
        style={styles.gradientBox}>
        <UrbanistBoldText style={styles.welcome}>
          Добро пожаловать в 👋
        </UrbanistBoldText>
        <UrbanistBlackText style={styles.appname}>Hadya</UrbanistBlackText>
        <UrbanistSemiboldText style={styles.description}>
          Лучшее приложение века для покупки подарков!
        </UrbanistSemiboldText>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gradientBox: {
    width: '100%',
    height: '60%',
    paddingHorizontal: 32,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  welcome: {
    // marginTop: 100,
    fontSize: 36,
    fontWeight: 'bold',
    color: textColors.pureWhite,
    lineHeight: 48,
    marginBottom: 12,
  },
  appname: {
    fontSize: 96,
    color: textColors.pureWhite,
    fontWeight: '900',
    marginBottom: 24,
  },
  description: {
    fontSize: 18,
    fontWeight: '600',
    color: textColors.pureWhite,
    lineHeight: 25,
    letterSpacing: 0.3,
  },
});
