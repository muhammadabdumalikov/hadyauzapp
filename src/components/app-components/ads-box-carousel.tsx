import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
const AnimatedFlatList = Animated.FlatList;

const {width} = Dimensions.get('screen');

export const images = [
  require('@/assets/images/Theme1.png'),
  require('@/assets/images/Theme2.png'),
  require('@/assets/images/Theme3.png'),
  require('@/assets/images/Theme4.png'),
];

const _dotSize = 8;

const Item = ({item, index, scrollX}) => {
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
    <View
      style={{
        width,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Image
        source={item}
        style={[{flex: 1, width: '100%', height: '100%'}, style]}
      />
    </View>
  );
};

const PaginationDot = ({index, scrollX}) => {
  const style = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [_dotSize * 1, _dotSize * 3, _dotSize * 1],
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
  return (
    <Animated.View
      style={[
        {
          width: _dotSize,
          height: _dotSize,
          borderRadius: _dotSize,
          backgroundColor: '#873afd',
          marginHorizontal: _dotSize / 2,
        },
        style,
      ]}
    />
  );
};

const Pagination = ({data, scrollX}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
        flexDirection: 'row',
      }}>
      {data.map((_, index) => (
        <PaginationDot index={index} scrollX={scrollX} key={index} />
      ))}
    </View>
  );
};

function AdsBoxCarousel() {
  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(ev => {
    scrollX.value = ev.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={images}
        keyExtractor={item => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        bounces={false}
        renderItem={({item, index}) => {
          return <Item item={item} index={index} scrollX={scrollX} />;
        }}
      />
      <Pagination data={images} scrollX={scrollX} />
    </View>
  );
}

export const AdsBoxCarouselComponent = React.memo(
  React.forwardRef(AdsBoxCarousel),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
