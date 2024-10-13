
import { BellIcon } from '@/assets/icons/bell';
import { WishlistHeartSvg } from '@/assets/icons/favorite-heart';
import { EmptySvg } from '@/assets/images/empty';
import { IdeasSection } from '@/components/app-components/ideas-section';
import { SectionHeader } from '@/components/app-components/see-all-header';
import { UrbanistBoldText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { IProduct } from '@/constants/data';
import React, {useCallback} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Pressable,
  SectionList,
  StyleSheet,
} from 'react-native';

export const DATA = [
  {
    title: 'Праздники и поводы',
    data: [
      {
        name: 'x',
        data: [
          'French Fries',
          'Onion Rings',
          'Fried Shrimps',
          '1',
          '2',
          '3',
          '4',
        ],
      },
    ],
  },
  {
    title: 'Кому предназначен подарок',
    data: [
      {
        name: 'x',
        data: [
          'French Fries',
          'Onion Rings',
          'Fried Shrimps',
          '1',
          '2',
          '3',
          '4',
        ],
      },
    ],
  },
  {
    title: 'Подарки по профессиям',
    data: [
      {
        name: 'x',
        data: [
          'French Fries',
          'Onion Rings',
          'Fried Shrimps',
          '1',
          '2',
          '3',
          '4',
        ],
      },
    ],
  },
  {
    title: 'Подарки по интересам',
    data: [
      {
        name: 'x',
        data: [
          'French Fries',
          'Onion Rings',
          'Fried Shrimps',
          '1',
          '2',
          '3',
          '4',
        ],
      },
    ],
  },
  {
    title: 'Универсальные подарки',
    data: [
      {
        name: 'x',
        data: [
          'French Fries',
          'Onion Rings',
          'Fried Shrimps',
          '1',
          '2',
          '3',
          '4',
        ],
      },
    ],
  },
];

export default function IdeasScreen() {
  const ListHeaderComponent = React.memo(() => (
    <View>
      <SectionHeader
        headerName="Специальные предложения"
        style={{paddingHorizontal: 0}}
      />

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          resizeMode="cover"
          style={{
            height: 170,
            width: '32%',
            borderRadius: 15,
          }}
          source={require('@/assets/images/birthday-trash.png')}
        />
        <Image
          resizeMode="cover"
          style={{
            height: 170,
            width: '32%',
            borderRadius: 15,
            backgroundColor: 'red',
          }}
          source={require('@/assets/images/wedding-trash.png')}
        />
        <Image
          resizeMode="cover"
          style={{
            height: 170,
            width: '32%',
            borderRadius: 15,
          }}
          source={require('@/assets/images/yubilye-trash.png')}
        />
      </View>
    </View>
  ));

  const renderSection = useCallback(
    ({
      section,
    }: {
      section: {
        title?: string;
        data: IProduct[] | any;
      };
    }) => {
      return (
        <View>
          <SectionHeader
            headerName={section.title || ''}
            style={{paddingHorizontal: 0, marginVertical: 10}}
          />
          <IdeasSection product={''} />
        </View>
      );
    },
    [],
  );

  return DATA.length > 0 ? (
    <SafeAreaView style={styles.flatlistStyleView}>
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerText}>Заказы</UrbanistBoldText>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.searchBoxElement}>
            <BellIcon width={30} height={30} color={textColors.navyBlack} />
          </Pressable>
          <Pressable style={styles.searchBoxElement}>
            <WishlistHeartSvg
              width={30}
              height={30}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>
      </View>

      <SectionList
        ListHeaderComponent={ListHeaderComponent}
        sections={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSection}
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <EmptySvg width={250} height={244} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: textColors.pureWhite,
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
  flatlistStyleView: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  emptyTxt: {
    marginTop: 40,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
  },
});
