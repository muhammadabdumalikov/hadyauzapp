import {textColors} from '@/constants/Colors';
import {IProduct} from '@/constants/data';
import {compareProps} from '@/utils/compare-props';
import React, {memo} from 'react';
import {Pressable, View, ImageBackground, StyleSheet} from 'react-native';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '../StyledText';
import {SemiFilledStar} from './star-percentage';
import {FavoriteHeartBtn} from './favorte-btn';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  product: IProduct;
};

const ProductCardComponent = function ({product}: Props) {
  const navigation = useNavigation();

  const openCardDetailScreen = () => {
    navigation.navigate('product-detail-screen');
  };

  return (
    // <Link href={{pathname: '/screens/product-detail'}} asChild>
    <Pressable style={styles.box} onPress={openCardDetailScreen}>
      <View style={[styles.image]}>
        <ImageBackground style={styles.imageBox} source={product.image} />
      </View>
      <View style={styles.cardFooter}>
        <UrbanistBoldText numberOfLines={2} style={styles.productTitle}>
          {product.name}
        </UrbanistBoldText>

        <View style={styles.details}>
          <View style={styles.starAndRate}>
            <SemiFilledStar rating={3} />
            <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
          </View>
          <View style={styles.divider} />
          <UrbanistSemiboldText style={styles.ordersTxt}>
            8633 заказов
          </UrbanistSemiboldText>
        </View>
        <UrbanistBoldText style={styles.productPrice}>
          {product.price.toLocaleString('fr-FR')} сум
        </UrbanistBoldText>
      </View>
      <FavoriteHeartBtn product={product} key={product.id} />
    </Pressable>
  );
};

export const ProductCard = memo(
  ProductCardComponent,
  compareProps<Props>(['product']),
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'space-between',
    // width: width*0.44,
    width: 190,
    // height: width*0.64,
    height: 300,
    backgroundColor: textColors.pureWhite,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginHorizontal: 8,
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 182,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: textColors.softPurple,
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  cardFooter: {
    height: 106,
    gap: 8,
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: textColors.navyBlack,
    height: 44,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  ordersTxt: {
    marginRight: 10,
    fontWeight: '600',
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: textColors.transparentSilver,
    overflow: 'hidden',
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
    marginHorizontal: 10,
  },
});
