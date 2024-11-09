import {textColors} from '@/constants/Colors';
import {IProduct} from '@/constants/data';
import {compareProps} from '@/utils/compare-props';
import {memo, useRef, useState} from 'react';
import {Pressable, Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type Props = {
  product: IProduct;
};

const FavoriteHeartBtnComponent = ({product}: Props) => {
  const [favorite, setFavorite] = useState(false);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const onHeartPressHandler = () => {
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setFavorite(prev => !prev);
  };

  return (
    <Pressable onPress={onHeartPressHandler} style={styles.favoriteHeartBox}>
      <LinearGradient
        colors={['#7210FF', '#9D59FF']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <Animated.View style={{opacity: fadeAnimation}}>
          {favorite ? (
            <AntDesign size={17} name="heart" color={textColors.pureWhite} />
          ) : (
            <AntDesign size={17} name="hearto" color={textColors.pureWhite} />
          )}
        </Animated.View>
      </LinearGradient>
    </Pressable>
  );
};

export const FavoriteHeartBtn = memo(
  FavoriteHeartBtnComponent,
  compareProps<Props>(['product']),
);

const styles = StyleSheet.create({
  favoriteHeartBox: {
    position: 'absolute',
    top: 14,
    right: 12,
    height: 28,
    width: 28,
  },
});
