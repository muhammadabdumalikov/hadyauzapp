import React, {useRef, useState} from 'react';
import {Animated, View, Pressable, StyleSheet} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Animated2 from 'react-native-reanimated';
import BagSvg from '../assets/icons/bag';
import {WishlistHeartSvg} from '../assets/icons/favorite-heart';
import {GoBackButtonAbsolute} from '../components/app-components/go-back';
import ProductDetailCarousel from '../components/app-components/product-detail-carousel';
import {SemiFilledStar} from '../components/app-components/star-percentage';
import {UrbanistBoldText, UrbanistMediumText} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function ProductDetailScreen() {
  const animationTime = 500;

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [productCountCounter, setProductCountCounter] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(textColors.offRed);

  const sizes = ['S', 'M', 'L'];
  const colors = [
    textColors.blueOcean,
    textColors.redVelvet,
    textColors.orangeFresh,
    textColors.green2,
  ];

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
    <>
      <GoBackButtonAbsolute />
      <Animated2.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.carouselStyle}>
          <ProductDetailCarousel scrollY={scrollY} />
        </View>

        <View style={styles.productTitleRow}>
          <View style={styles.productTitleTxt}>
            <UrbanistBoldText numberOfLines={2} style={styles.productTitle}>
              Подарочный набор для мужчин THE MOON
            </UrbanistBoldText>
          </View>
          <WishlistHeartSvg
            width={28}
            height={28}
            color={textColors.navyBlack}
          />
        </View>

        <View style={styles.rateRow}>
          <View style={styles.ordersTxtBox}>
            <UrbanistMediumText style={styles.ordersTxt}>
              8633 заказов
            </UrbanistMediumText>
          </View>
          <View style={styles.starAndRate}>
            <SemiFilledStar rating={3} />
            <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
            {/* <Link href="screens/reviews-screen" asChild> */}
            <Pressable>
              <UrbanistMediumText style={styles.rateTxt}>
                (6,378 отзывов)
              </UrbanistMediumText>
            </Pressable>
          </View>
        </View>

        <View style={styles.dividerBox}>
          <View style={styles.divider} />
        </View>

        <View style={styles.descriptionBox}>
          <UrbanistBoldText style={styles.descriptionTxt}>
            Описание
          </UrbanistBoldText>
          <UrbanistMediumText style={styles.descriptionDetailTxt}>
            Подарочный набор The MOON создан специально для современных мужчин.
            Уникальные формулы косметических средств, пленительный и стойкий
            аромат с нотами эфирных масел подарят ощущение непревзойденной
            свежести и уверенности в себе! Состав набора: 1. Гель для душа THE
            MOON 250мл. 2. Шампунь для всех типов THE MOON 250мл
          </UrbanistMediumText>
        </View>

        <View style={styles.colorAndSizeBox}>
          <View style={styles.colorBox}>
            <UrbanistBoldText style={styles.countTxt}>Размер</UrbanistBoldText>
            <View style={styles.colorOptionBox}>
              {sizes.map(size => (
                <Pressable
                  key={size}
                  style={[
                    styles.sizeOption,
                    selectedSize === size && styles.selectedSizeOption,
                  ]}
                  onPress={() => setSelectedSize(size)}>
                  <UrbanistBoldText
                    style={[
                      styles.sizeTxt,
                      selectedSize === size && styles.selectedSizeOptionTxt,
                    ]}>
                    {size}
                  </UrbanistBoldText>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.sizeBox}>
            <UrbanistBoldText style={styles.countTxt}>Цвет</UrbanistBoldText>
            <View style={styles.colorOptionBox}>
              {colors.map(color => (
                <Pressable
                  key={color}
                  style={[styles.colorOption, {backgroundColor: color}]}
                  onPress={() => setSelectedColor(color)}>
                  <UrbanistBoldText style={{backgroundColor: color}}>
                    {selectedColor === color && (
                      <AntDesign name="check" size={24} color="white" />
                    )}
                  </UrbanistBoldText>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.countBox}>
          <UrbanistBoldText style={styles.countTxt}>
            Количество
          </UrbanistBoldText>
          <View style={styles.counterBox}>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterDecrement}>
              <AntDesign name="minus" size={24} color="black" />
            </Pressable>
            <Animated.Text
              style={[
                {
                  transform: [{scale: counterScale}],
                  fontWeight: '700',
                  fontSize: 18,
                  fontFamily: 'UrbanistBold',
                },
              ]}>
              {productCountCounter}
            </Animated.Text>
            <Pressable
              style={styles.counterIconsStyle}
              onPress={counterIncrement}>
              <AntDesign name="plus" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </Animated2.ScrollView>
      <View style={styles.modalFooterPrice}>
        <View style={styles.modalFooterPriceBox}>
          <UrbanistMediumText style={styles.modalFooterPriceTitle}>
            Итоговая цена
          </UrbanistMediumText>
          <UrbanistBoldText style={styles.modalFooterPriceTxt}>
            {(110000).toLocaleString('fr-FR')} UZS
          </UrbanistBoldText>
        </View>
        <Pressable style={styles.buyBtn}>
          <LinearGradient
            colors={['#7210FF', '#9D59FF']}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              paddingHorizontal: 30,
            }}>
            <BagSvg height={20} width={20} />
            <UrbanistBoldText style={styles.buyBtnTxt}>
              В корзину
            </UrbanistBoldText>
          </LinearGradient>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  contentContainer: {
    paddingBottom: 140,
    alignItems: 'center',
  },
  carouselStyle: {
    height: 428,
  },
  productTitleRow: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
    maxHeight: 80,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitleTxt: {flex: 1},
  productTitle: {
    fontWeight: '700',
    fontSize: 24,
    color: textColors.navyBlack,
  },
  rateRow: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 24,
    height: 24,
  },
  ordersTxtBox: {
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: textColors.transparentSilver,
    overflow: 'hidden',
    marginRight: 16,
  },
  ordersTxt: {
    fontWeight: '400',
    fontSize: 12,
    paddingHorizontal: 10,
    letterSpacing: 0.3,
  },
  starAndRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  dividerBox: {
    paddingHorizontal: 16,
    marginVertical: 16,
    height: 1,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: textColors.grey1,
  },
  descriptionBox: {
    width: '100%',
    paddingHorizontal: 16,
  },
  descriptionTxt: {
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.3,
  },
  descriptionDetailTxt: {
    marginTop: 8,
    paddingLeft: 24,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0.2,
  },
  countBox: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  countTxt: {
    fontWeight: '700',
    fontSize: 18,
    marginRight: 20,
    letterSpacing: 0.3,
  },
  counterBox: {
    backgroundColor: textColors.grey2,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 100,
    height: 48,
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterIconsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooterPrice: {
    height: 110,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: textColors.pureWhite,
    width: '100%',
    borderColor: textColors.grey3,
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'absolute',
    zIndex: 1,
  },
  modalFooterPriceBox: {},
  modalFooterPriceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: textColors.grey6,
    marginBottom: 6,
  },
  modalFooterPriceTxt: {
    fontSize: 24,
    fontWeight: '700',
    color: textColors.navyBlack,
  },
  buyBtn: {
    height: 58,
  },
  buyBtnTxt: {
    marginLeft: 16,
    fontSize: 16,
    color: textColors.pureWhite,
  },
  colorAndSizeBox: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  colorBox: {
    width: '45%',
  },
  sizeBox: {
    width: '55%',
  },
  colorOptionBox: {
    marginTop: 12,
    height: 40,
    flexDirection: 'row',
    gap: 12,
  },
  sizeOption: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: textColors.navyBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSizeOption: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  sizeTxt: {
    fontWeight: '700',
    fontSize: 16,
  },
  selectedSizeOptionTxt: {
    color: textColors.pureWhite,
  },
  colorOption: {
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
