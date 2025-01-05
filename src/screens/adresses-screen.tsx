import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
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

const {width: SCREEN_WIDTH} = Dimensions.get('window');
// Fixed sizes
const ICON_WIDTH = 52;
const ICON_MARGIN = 10;
const EDIT_ICON_WIDTH = 36;
const HORIZONTAL_PADDING = 15;
const CONTAINER_PADDING = 16;

// Calculate dynamic width for text container
const TEXT_CONTAINER_WIDTH =
  SCREEN_WIDTH -
  (ICON_WIDTH +
    ICON_MARGIN +
    EDIT_ICON_WIDTH +
    HORIZONTAL_PADDING * 2 +
    CONTAINER_PADDING * 2);

export const AddressSelection = () => {
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

  const renderAddressCard = item => {
    const CardWrapper = item.isDefault ? LinearWrapper : View;

    return (
      <CardWrapper style={[styles.addressCard]} key={item.id}>
        <View style={styles.addressInfo}>
          <AddressLocation width={ICON_WIDTH} height={ICON_WIDTH} />
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
      </CardWrapper>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CustomHeader title="Адрес доставки" />
          <ScrollView style={styles.scrollView}>
            {addresses?.map(renderAddressCard)}
            <Pressable style={styles.addButton}>
              <Text style={styles.addButtonText}>Добавить новый адрес</Text>
            </Pressable>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: CONTAINER_PADDING,
  },
  addressCard: {
    backgroundColor: textColors.grey1,
    height: 85,
    padding: HORIZONTAL_PADDING,
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
    width: TEXT_CONTAINER_WIDTH,
    marginLeft: ICON_MARGIN,
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
    width: EDIT_ICON_WIDTH,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: textColors.grey3,
    height: 60,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
