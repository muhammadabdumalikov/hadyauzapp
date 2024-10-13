
import React, {useState, useRef} from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {LinearGradient} from 'react-native-svg';
import {MyRefType} from '../search-screen';
import { BellIcon } from '@/assets/icons/bell';
import BuyNext from '@/assets/icons/buy-next';
import { WishlistHeartSvg } from '@/assets/icons/favorite-heart';
import { EmptySvg } from '@/assets/images/empty';
import { ProductCardForCartBag, ProductCardForCartBagRefSheet } from '@/components/app-components/cart-bag-product-card copy';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistBoldText, UrbanistMediumText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';

export default function CartScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(['1', '2', '3', '4']);
  const refRBSheet = useRef<MyRefType>(null);

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const closeBottomSheet = () => {
    refRBSheet.current?.close();
  };

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a network request to fetch new data
    setTimeout(() => {
      setData(['1', '2', '3', '4', '5', '6']);
      setRefreshing(false); // End refreshing when done
    }, 2000); // Simulate a 2-second delay
  };

  return data.length > 0 ? (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerText}>Заказы</UrbanistBoldText>
        <View style={{flexDirection: 'row'}}>
          {/* <Link href="/screens/notification-screen" asChild> */}
          <Pressable style={styles.searchBoxElement}>
            <BellIcon width={30} height={30} color={textColors.navyBlack} />
          </Pressable>
          {/* <Link href="/screens/wishlist-screen" asChild> */}
          <Pressable style={styles.searchBoxElement}>
            <WishlistHeartSvg
              width={30}
              height={30}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>
      </View>

      <FlatList
        data={data}
        style={{
          backgroundColor: textColors.grey1,
        }}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <ProductCardForCartBag handleDelete={openBottomSheet} key={item} />
        )}
        keyExtractor={item => item}
        // estimatedItemSize={10}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.modalFooterPrice}>
        <View style={styles.modalFooterPriceBox}>
          <UrbanistMediumText style={styles.modalFooterPriceTitle}>
            Итоговая цена
          </UrbanistMediumText>
          <UrbanistBoldText style={styles.modalFooterPriceTxt}>
            {(110000).toLocaleString('fr-FR')} UZS
          </UrbanistBoldText>
        </View>
        <Pressable
          style={styles.buyBtn}
          onPress={() => navigation.push('screens/order-confirmation-screen')}>
          <LinearGradient
            colors={['#7210FF', '#9D59FF']}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            <UrbanistBoldText style={styles.buyBtnTxt}>
              Оформить
            </UrbanistBoldText>
            <BuyNext width={20} height={20} />
          </LinearGradient>
        </Pressable>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={400}
        openDuration={300}
        draggable
        // dragOnContent
        customStyles={{
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            gap: 15,
            paddingBottom: 20,
            paddingHorizontal: 16,
            backgroundColor: textColors.grey1,
          },
        }}>
        <UrbanistBoldText style={styles.title}>
          Убрать из Корзины?
        </UrbanistBoldText>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: textColors.grey4,
          }}
        />
        <ProductCardForCartBagRefSheet />
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.resetButton} onPress={closeBottomSheet}>
            <UrbanistBoldText style={styles.resetText}>
              Отменить
            </UrbanistBoldText>
          </Pressable>
          <Pressable style={{flex: 1}} onPress={async () => {}}>
            <LinearWrapper style={styles.applyButton}>
              <UrbanistBoldText style={styles.applyText}>
                Да, выйти
              </UrbanistBoldText>
            </LinearWrapper>
          </Pressable>
        </View>
      </RBSheet>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <EmptySvg width={250} height={244} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
      <UrbanistMediumText style={styles.emptySmallTxt}>
        В данный момент у вас нет текущих заказов
      </UrbanistMediumText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 12,
  },
  headerText: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  searchBoxElement: {
    marginHorizontal: 3,
    padding: 5,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: textColors.grey1,
    paddingBottom: Platform.OS === 'ios' ? 90 + 90 : 75 + 90,
  },
  emptyTxt: {
    marginTop: 40,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
  },
  emptySmallTxt: {
    fontSize: 18,
    fontWeight: '400',
    color: textColors.grey3,
  },
  modalFooterPrice: {
    height: 90,
    left: 0,
    right: 0,
    bottom: Platform.OS === 'ios' ? 90 : 75,
    width: '100%',
    borderColor: textColors.grey3,
    borderTopWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  modalFooterPriceBox: {
    flex: 7,
  },
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
    flex: 8,
    height: 58,
  },
  buyBtnTxt: {
    marginLeft: 16,
    fontSize: 16,
    color: textColors.pureWhite,
    marginRight: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: textColors.grey1,
  },
  resetButton: {
    flex: 1,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.grey5,
    borderRadius: 30,
    marginRight: 10,
  },
  resetText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  applyButton: {
    flex: 1,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  applyText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
