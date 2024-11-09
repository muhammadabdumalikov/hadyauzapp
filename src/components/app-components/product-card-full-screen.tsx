import {ReviewSvg} from '@/assets/icons/review';
import {textColors} from '@/constants/Colors';
import {Pressable, ImageBackground, View, StyleSheet} from 'react-native';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '../StyledText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';


export const ProductCardFullScreenForCurrent = () => {
  return (
    <Pressable style={styles.box}>
      <ImageBackground
        source={require('../../assets/images/lego.png')}
        style={styles.image}
      />
      <View style={styles.detail}>
        <UrbanistBoldText style={styles.productTitle}>
          Сумка из кожи
        </UrbanistBoldText>

        <View style={styles.info}>
          <View style={styles.colorCircle} />
          <UrbanistMediumText style={styles.infoTxt}>
            Цвет | Размер = M | Qty = 1
          </UrbanistMediumText>
        </View>

        <UrbanistSemiboldText style={styles.processTxt}>
          В доставке
        </UrbanistSemiboldText>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>
            445 000 сум
          </UrbanistBoldText>

          {/* <Link href="screens/delivery-process" asChild> */}
          <Pressable>
            <LinearGradient
              colors={['#7210FF', '#9D59FF']}
              style={styles.priceBtn}>
              <AntDesign
                name="arrowright"
                size={20}
                color={textColors.pureWhite}
              />
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export const ProductCardFullScreenForCompleted = ({
  openBottomSheet,
}: {
  openBottomSheet?: any;
}) => {
  return (
    <Pressable style={styles.box}>
      <ImageBackground
        source={require('../../assets/images/lego.png')}
        style={styles.image}
      />
      <View style={styles.detail}>
        <UrbanistBoldText style={styles.productTitle}>
          Сумка из кожи
        </UrbanistBoldText>

        <View style={styles.info}>
          <View style={styles.colorCircle} />
          <UrbanistMediumText style={styles.infoTxt}>
            Цвет | Размер = M | Qty = 1
          </UrbanistMediumText>
        </View>

        <UrbanistSemiboldText
          style={[
            styles.processTxt,
            {backgroundColor: textColors.green1, color: textColors.green2},
          ]}>
          Доставлено
        </UrbanistSemiboldText>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>
            445 000 сум
          </UrbanistBoldText>

          {openBottomSheet && (
            <Pressable onPress={openBottomSheet}>
              <LinearGradient
                colors={['#7210FF', '#9D59FF']}
                style={styles.priceBtn}>
                <ReviewSvg height={20} width={20} />
              </LinearGradient>
            </Pressable>
          )}
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
    backgroundColor: textColors.grey2,
    borderRadius: 20,
  },
  detail: {
    // Remove or adjust flex: 1 here if needed for layout
    width: 230,
    marginLeft: 16,
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
  processTxt: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: textColors.grey3,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
    alignSelf: 'flex-start',
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
  priceBtn: {
    width: 52,
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
