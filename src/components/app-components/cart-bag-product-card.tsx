import React, {useRef, useState} from 'react';
import {StyleSheet, Pressable, ImageBackground, Animated} from 'react-native';

import {View} from '../Themed';
import {UrbanistBoldText, UrbanistMediumText} from '../StyledText';
import DeleteIconSvg from '@/assets/icons/delete-icon';
import { textColors } from '@/constants/Colors';
import AntDesign from 'react-native-vector-icons';
console.log(444444, AntDesign);

export type Props = {
  handleDelete: () => void;
};

export const ProductCardForCartBag = (props: Props) => {
  const animationTime = 500;

  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [productCountCounter, setProductCountCounter] = useState(0);

  const startCounterAnimation = (value: number) => {
    return Animated.spring(counterAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
      // damping: 3
    });
  };

  const counterScale = counterAnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.5, 1, 1.5],
    extrapolate: 'clamp',
  });

  const counterDecrement = () => {
    if (productCountCounter > 0) {
      setProductCountCounter(productCountCounter - 1);
      startCounterAnimation(-1).start();
      setTimeout(() => {
        startCounterAnimation(0).start();
      }, animationTime);
    }
  };

  const counterIncrement = () => {
    setProductCountCounter(productCountCounter + 1);
    startCounterAnimation(1).start();
    setTimeout(() => {
      startCounterAnimation(0).start();
    }, animationTime);
  };

  return (
    <Pressable style={styles.box}>
      <ImageBackground
        source={require('../../assets/images/lego.png')}
        style={styles.image}
      />
      <View style={styles.detail}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View>
            <UrbanistBoldText style={styles.productTitle}>
              Сумка из кожи
            </UrbanistBoldText>

            <View style={styles.info}>
              <View style={styles.colorCircle} />
              <UrbanistMediumText style={styles.infoTxt}>
                Цвет | Размер = M | Qty = 1
              </UrbanistMediumText>
            </View>
          </View>
          <Pressable onPress={props.handleDelete}>
            <DeleteIconSvg
              width={24}
              height={24}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>
            445 000 сум
          </UrbanistBoldText>

          <View style={styles.counterBox}>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterDecrement}>
              <AntDesign name="minus" size={14} color="black" />
            </Pressable>
            <Animated.Text
              style={[
                {
                  transform: [{scale: counterScale}],
                  fontWeight: '700',
                  fontSize: 14,
                  fontFamily: 'UrbanistSemibold',
                },
              ]}>
              {productCountCounter}
            </Animated.Text>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterIncrement}>
              <AntDesign name="plus" size={14} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export const ProductCardForCartBagRefSheet = () => {
  const animationTime = 500;

  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [productCountCounter, setProductCountCounter] = useState(0);

  const startCounterAnimation = (value: number) => {
    return Animated.spring(counterAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
      // damping: 3
    });
  };

  const counterScale = counterAnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.5, 1, 1.5],
    extrapolate: 'clamp',
  });

  const counterDecrement = () => {
    if (productCountCounter > 0) {
      setProductCountCounter(productCountCounter - 1);
      startCounterAnimation(-1).start();
      setTimeout(() => {
        startCounterAnimation(0).start();
      }, animationTime);
    }
  };

  const counterIncrement = () => {
    setProductCountCounter(productCountCounter + 1);
    startCounterAnimation(1).start();
    setTimeout(() => {
      startCounterAnimation(0).start();
    }, animationTime);
  };

  return (
    <Pressable style={styles.box}>
      <ImageBackground
        source={require('../../assets/images/lego.png')}
        style={styles.image}
      />
      <View style={styles.detail}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View>
            <UrbanistBoldText style={styles.productTitle}>
              Сумка из кожи
            </UrbanistBoldText>

            <View style={styles.info}>
              <View style={styles.colorCircle} />
              <UrbanistMediumText style={styles.infoTxt}>
                Цвет | Размер = M | Qty = 1
              </UrbanistMediumText>
            </View>
          </View>
        </View>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>
            445 000 сум
          </UrbanistBoldText>

          <View style={styles.counterBox}>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterDecrement}>
              <AntDesign name="minus" size={14} color="black" />
            </Pressable>
            <Animated.Text
              style={[
                {
                  transform: [{scale: counterScale}],
                  fontWeight: '700',
                  fontSize: 14,
                  fontFamily: 'UrbanistSemibold',
                },
              ]}>
              {productCountCounter}
            </Animated.Text>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterIncrement}>
              <AntDesign name="plus" size={14} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export const ProductCardForConfirmation = (props: Props) => {
  const animationTime = 500;

  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [productCountCounter, setProductCountCounter] = useState(1);

  const startCounterAnimation = (value: number) => {
    return Animated.spring(counterAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
      // damping: 3
    });
  };

  const counterScale = counterAnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.5, 1, 1.5],
    extrapolate: 'clamp',
  });

  const counterDecrement = () => {
    if (productCountCounter > 0) {
      setProductCountCounter(productCountCounter - 1);
      startCounterAnimation(-1).start();
      setTimeout(() => {
        startCounterAnimation(0).start();
      }, animationTime);
    }
  };

  const counterIncrement = () => {
    setProductCountCounter(productCountCounter + 1);
    startCounterAnimation(1).start();
    setTimeout(() => {
      startCounterAnimation(0).start();
    }, animationTime);
  };

  return (
    <Pressable style={styles.box}>
      <ImageBackground
        source={require('../../assets/images/lego.png')}
        style={styles.image}
      />
      <View style={styles.detail}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View>
            <UrbanistBoldText style={styles.productTitle}>
              Сумка из кожи
            </UrbanistBoldText>

            <View style={styles.info}>
              <View style={styles.colorCircle} />
              <UrbanistMediumText style={styles.infoTxt}>
                Цвет | Размер = M | Qty = 1
              </UrbanistMediumText>
            </View>
          </View>
          <Pressable onPress={props.handleDelete}>
            <DeleteIconSvg
              width={24}
              height={24}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>
            445 000 сум
          </UrbanistBoldText>

          <View
            style={[
              styles.counterBox,
              {
                width: 36,
                padding: 0,
                justifyContent: 'center',
              },
            ]}>
            <UrbanistBoldText
              style={[
                {
                  fontWeight: '700',
                  fontSize: 14,
                },
              ]}>
              {productCountCounter}
            </UrbanistBoldText>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 152,
    marginVertical: 8,
    backgroundColor: textColors.pureWhite,
    borderRadius: 32,
    alignSelf: 'center',
    padding: 16,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: textColors.softPurple,
    borderRadius: 20,
  },
  detail: {
    // Remove or adjust flex: 1 here if needed for layout
    justifyContent: 'space-between',
    width: 230,
    marginLeft: 16,
    paddingTop: 10,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  colorCircle: {
    backgroundColor: textColors.redVelvet,
    width: 16,
    height: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  infoTxt: {
    fontWeight: '500',
    fontSize: 12,
    color: textColors.darkGrey,
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 32,
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: 18,
  },
  counterBox: {
    backgroundColor: textColors.grey2,
    paddingHorizontal: 12,
    borderRadius: 100,
    height: 36,
    width: 93,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterIconsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
