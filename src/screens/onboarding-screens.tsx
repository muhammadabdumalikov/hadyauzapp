import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, Pressable, ImageBackground} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import {saveData} from '../storage/store';
import {UrbanistBlackText, UrbanistBoldText, UrbanistSemiboldText} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('screen');

const data = [
  {
    title: 'Добро пожаловать в Hadya',
    subtitle: 'Лучшее приложение для покупки подарков!',
    image: require('@/assets/images/lego.png'),
  },
  {
    title: 'Мы предлагаем высококачественные подарки',
    subtitle: '',
    image: require('@/assets/images/lego.png'),
  },
  {
    title: 'Ваше удовлетворение — наш приоритет',
    subtitle: '',
    image: require('@/assets/images/lego.png'),
  },
  {
    title: 'Давайте удовлетворим ваши потребности с Hadya!',
    subtitle: '',
    image: require('@/assets/images/lego.png'),
  },
];

const _dotSize = 8;

export const ONBOARDING_KEY = 'hasSeenOnboarding'; // Key to track if onboarding has been seen

const OnboardingItem = ({item, index, scrollX}) => {
  const style = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value / width,
        [index - 0.6, index, index + 0.6],
        [0, 1, 0],
      ),
    };
  });

  return (
    <View style={styles.slide}>
      <Animated.Image source={item.image} style={[styles.image, style]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const PaginationDot = ({index, scrollX}) => {
  const style = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [_dotSize, _dotSize * 3, _dotSize],
        Extrapolation.CLAMP,
      ),
      opacity: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [0.2, 1, 0.2],
        Extrapolation.CLAMP,
      ),
    };
  });

  return <Animated.View style={[styles.paginationDot, style]} />;
};

const Pagination = ({data, scrollX}) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, index) => (
        <PaginationDot key={index} index={index} scrollX={scrollX} />
      ))}
    </View>
  );
};

export function OnboardingCarousel() {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(); // Ref to control the FlatList
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  // Function to update state outside the worklet
  const updateIndex = index => {
    setCurrentIndex(index);
  };

  const onScroll = useAnimatedScrollHandler(ev => {
    const index = Math.round(ev.contentOffset.x / width);
    runOnJS(updateIndex)(index); // Safely call setCurrentIndex using runOnJS
    scrollX.value = ev.contentOffset.x;
  });

  const handleNextPress = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      saveData(ONBOARDING_KEY, true);
      // navigation.navigate('screens/enter-phone-login.screen');
      // router.replace('(tabs)');
    }
  };

  return (
    <LinearWrapper
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        style={styles.bgContainer}
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
      <BlurView style={styles.container} blurAmount={25} blurType="light">
        <Animated.FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          bounces={false}
          renderItem={({item, index}) => {
            return (
              <OnboardingItem item={item} index={index} scrollX={scrollX} />
            );
          }}
        />
        <Pagination data={data} scrollX={scrollX} />
        <Pressable
          onPress={handleNextPress} // Call handleNextPress when Next button is pressed
        >
          <LinearWrapper
            style={{
              marginHorizontal: 16,
              width: 398,
              height: 58,
              position: 'absolute',
              bottom: 48,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            <UrbanistBoldText
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: textColors.pureWhite,
              }}>
              {currentIndex === 3 ? 'Начать' : 'Следующий'}
            </UrbanistBoldText>
          </LinearWrapper>
        </Pressable>
      </BlurView>
    </LinearWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
  },
  slide: {
    marginTop: 120,
    width,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 194,
  },
  image: {
    width: '100%',
    height: 420,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  pagination: {
    position: 'absolute',
    bottom: 146,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDot: {
    width: _dotSize,
    height: _dotSize,
    borderRadius: _dotSize / 2,
    backgroundColor: '#873afd',
    marginHorizontal: _dotSize / 2,
  },
  bgContainer: {
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
