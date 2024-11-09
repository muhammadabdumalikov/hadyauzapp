import React, {useRef} from 'react';
import {View, StyleSheet, Pressable, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AddressLocation from '../assets/images/address-location';
import {DeliveryTruck} from '../assets/images/delivery-truck';
import BottomButton from '../components/app-components/bottom-btn';
import {ProductCardForConfirmation} from '../components/app-components/cart-bag-product-card';
import Divider from '../components/app-components/divider';
import {CustomHeader} from '../components/app-components/go-back';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import {SectionHeader} from '../components/app-components/see-all-header';
import {UrbanistBoldText, UrbanistMediumText} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {MyRefType} from './search-screen';
import {SafeAreaView} from '../components/Themed';

const data = ['1', '2', '3', '4'];

const OrderConfirmationScreen = () => {
  const refRBSheet = useRef<MyRefType>(null);

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const closeBottomSheet = () => {
    refRBSheet.current?.close();
  };

  // Sample data for addresses
  const addresses = [
    {
      id: '1',
      title: 'Домой',
      address: 'Ташкент, Сергелийский район, Куйлюк',
      isDefault: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Оформление" style={styles.sectionHeaderBox} />
      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          backgroundColor: textColors.grey1,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <SectionHeader
          headerName="Адрес доставки"
          style={styles.sectionHeaderBox}
        />
        <LinearWrapper style={[styles.addressCard]} key={addresses[0].id}>
          <View style={styles.addressInfo}>
            <AddressLocation width={52} height={52} />
            <View style={styles.textContainer}>
              <View style={styles.titleRow}>
                <UrbanistBoldText
                  style={[styles.addressTitle, {color: textColors.pureWhite}]}>
                  {addresses[0].title}
                </UrbanistBoldText>
              </View>
              <UrbanistMediumText
                numberOfLines={1}
                style={[styles.addressText, {color: textColors.grey3}]}>
                {addresses[0].address}
              </UrbanistMediumText>
            </View>
          </View>
          <Pressable style={styles.editIcon}>
            <FontAwesome6
              name="pencil"
              size={16}
              color={textColors.pureWhite}
            />
          </Pressable>
        </LinearWrapper>

        <SectionHeader
          headerName="Адрес доставки"
          style={styles.sectionHeaderBox}
        />

        {data?.map(item => {
          return (
            <ProductCardForConfirmation
              handleDelete={openBottomSheet}
              key={item}
            />
          );
        })}

        <Divider />
        <SectionHeader
          headerName="Тип доставки"
          style={styles.sectionHeaderBox}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 64,
            width: '100%',
            backgroundColor: textColors.pureWhite,
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <DeliveryTruck width={40} height={40} />
            <UrbanistBoldText style={{marginLeft: 16, fontSize: 18}}>
              Выберите тип доставки
            </UrbanistBoldText>
          </View>
          <FontAwesome name="angle-right" size={28} color="black" />
        </View>

        <BottomButton
          text="Перейти к оплате"
          style={{position: 'static', bottom: 0, marginTop: 14}}
        />
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        height={220}
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
        <Divider />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: textColors.grey1,
  },
  sectionHeaderBox: {
    width: '100%',
    backgroundColor: textColors.grey1,
    paddingHorizontal: 0,
  },
  addressCard: {
    backgroundColor: textColors.grey1,
    height: 85,
    padding: 15,
    borderRadius: 24,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleRow: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  addressTitle: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: '700',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  editIcon: {
    padding: 5,
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

export default OrderConfirmationScreen;
