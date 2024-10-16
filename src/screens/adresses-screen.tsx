import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import AddressLocation from '../assets/images/address-location';
import {CustomHeader} from '../components/app-components/go-back';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import {
  UrbanistBoldText,
  UrbanistSemiboldText,
  UrbanistMediumText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export const AddressSelection = () => {
  // Sample data for addresses
  const addresses = [
    {
      id: '1',
      title: 'Домой',
      address: 'Ташкент, Сергелийский район, Куйлюк',
      isDefault: true,
    },
    {
      id: '2',
      title: 'Офис',
      address: 'Ташкент, Мирзо Улугбек район, Каракамыш',
      isDefault: false,
    },
    {
      id: '3',
      title: 'Квартира',
      address: 'Ташкент, Юнусабадский район, Кичик халка',
      isDefault: false,
    },
    {
      id: '4',
      title: 'Родительский дом',
      address: 'Ташкент, Чиланзарский район, Алмаз',
      isDefault: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Адрес доставки" />
      <ScrollView>
        {addresses?.map(item => {
          return item.isDefault ? (
            <LinearWrapper style={[styles.addressCard]} key={item.id}>
              <View style={styles.addressInfo}>
                <AddressLocation width={52} height={52} />
                <View style={styles.textContainer}>
                  <View style={styles.titleRow}>
                    <UrbanistBoldText
                      style={[
                        styles.title,
                        item.isDefault && {color: textColors.pureWhite},
                      ]}>
                      {item.title}
                    </UrbanistBoldText>
                    {item.isDefault && (
                      <UrbanistSemiboldText style={styles.defaultLabel}>
                        По умолчанию
                      </UrbanistSemiboldText>
                    )}
                  </View>
                  <UrbanistMediumText
                    numberOfLines={1}
                    style={[
                      styles.addressText,
                      item.isDefault && {color: textColors.grey3},
                    ]}>
                    {item.address}
                  </UrbanistMediumText>
                </View>
              </View>
              <Pressable style={styles.editIcon}>
                <FontAwesome6
                  name="pencil"
                  size={16}
                  color={item.isDefault ? textColors.pureWhite : '#000'}
                />
              </Pressable>
            </LinearWrapper>
          ) : (
            <View style={[styles.addressCard]} key={item.id}>
              <View style={styles.addressInfo}>
                <AddressLocation width={52} height={52} />
                <View style={styles.textContainer}>
                  <View style={styles.titleRow}>
                    <UrbanistBoldText
                      style={[
                        styles.title,
                        item.isDefault && {color: textColors.pureWhite},
                      ]}>
                      {item.title}
                    </UrbanistBoldText>
                    {item.isDefault && (
                      <UrbanistSemiboldText style={styles.defaultLabel}>
                        По умолчанию
                      </UrbanistSemiboldText>
                    )}
                  </View>
                  <UrbanistMediumText
                    numberOfLines={1}
                    style={[
                      styles.addressText,
                      item.isDefault && {color: textColors.grey3},
                    ]}>
                    {item.address}
                  </UrbanistMediumText>
                </View>
              </View>
              <Pressable style={styles.editIcon}>
                <FontAwesome6
                  name="pencil"
                  size={16}
                  color={item.isDefault ? textColors.pureWhite : '#000'}
                />
              </Pressable>
            </View>
          );
        })}
        {/* <Link href="/screens/yandex-map-screen" asChild> */}
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>Добавить новый адрес</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressCard: {
    backgroundColor: textColors.grey1,
    height: 85,
    padding: 15,
    borderRadius: 24,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: 260,
    marginLeft: 10,
  },
  titleRow: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: '700',
  },
  defaultLabel: {
    fontSize: 10,
    fontWeight: '600',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    color: textColors.pureWhite,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  editIcon: {
    padding: 10,
  },
  addButton: {
    backgroundColor: textColors.grey3,
    height: 60,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
