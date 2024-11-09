import React, {memo, useRef, useState} from 'react';
import {StyleSheet, Pressable, ImageBackground, Animated} from 'react-native';

import {View} from '../Themed';
import {UrbanistBoldText, UrbanistMediumText} from '../StyledText';
import DeleteIconSvg from '@/assets/icons/delete-icon';
import {textColors} from '@/constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export type Props = {
  handleDelete: () => void;
};

export const ProductCardForCartBag = memo((props: Props) => {
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
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <UrbanistBoldText style={styles.productTitle} numberOfLines={2}>
              Сумка из кожи dfsfsdfdsfsdfsfsdfsdfdsfs
            </UrbanistBoldText>

            <View style={styles.info}>
              <View style={styles.colorCircle} />
              <UrbanistMediumText style={styles.infoTxt}>
                Цвет | Размер = M
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
          <View style={{width: '55%'}}>
            <UrbanistBoldText style={styles.priceTxt}>
              445 000 сум
            </UrbanistBoldText>
          </View>

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
});

export const ProductCardForCartBagRefSheet = memo(() => {
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
                Цвет | Размер = M
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
});

export const ProductCardForConfirmation = memo((props: Props) => {
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
                Цвет | Размер = M
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
            style={styles.countBox}>
            <UrbanistBoldText
              style={[
                {
                  fontWeight: '700',
                  fontSize: 14,
                },
              ]}>
              {99}
            </UrbanistBoldText>
          </View>
        </View>
      </View>
    </Pressable>
  );
});

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
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 16,
    paddingTop: 10,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
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
    fontSize: 11,
    color: textColors.darkGrey,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: 14,
  },
  counterBox: {
    backgroundColor: textColors.grey2,
    paddingHorizontal: 12,
    borderRadius: 100,
    height: 36,
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterIconsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countBox: {
    backgroundColor: textColors.grey2,
    borderRadius: 100,
    height: 40,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
