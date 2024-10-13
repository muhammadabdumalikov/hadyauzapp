import React, {useCallback} from 'react';
import {
  Pressable,
  View,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlashList} from '@shopify/flash-list';
import {BellIcon} from '@/assets/icons/bell';
import {WishlistHeartSvg} from '@/assets/icons/favorite-heart';
import {LocationColorfulSvg} from '@/assets/icons/location-colorful';
import {AdsBoxCarouselComponent} from '@/components/app-components/ads-box-carousel';
import {CategoryFlatlist} from '@/components/app-components/category-flatlist-index';
import {LinearWrapper} from '@/components/app-components/linear-wrapper';
import {ProductCard} from '@/components/app-components/product-card';
import {SeeAllHeader} from '@/components/app-components/see-all-header';
import {CategoryScrollView} from '@/components/app-components/selected-categories-scroll';
import {UrbanistMediumText} from '@/components/StyledText';
import {textColors} from '@/constants/Colors';
import {DATA, IProduct, PRODUCT_DATA} from '@/constants/data';

const ListHeaderComponent = React.memo(({onCategoryPress}) => (
  <>
    <Pressable>
      <View style={[styles.inputBox]}>
        <Feather name="search" size={24} color={textColors.navyBlack} />
        <MaterialCommunityIcons
          name="tune-variant"
          size={24}
          color={textColors.navyBlack}
        />
      </View>
    </Pressable>

    <SeeAllHeader
      headerName="Специальные предложения"
      btnName="Все"
      link="/screens/search-screen"
      onPress={onCategoryPress}
    />

    <AdsBoxCarouselComponent />

    <CategoryFlatlist />

    <SeeAllHeader
      headerName="Популярные"
      btnName="Посмотреть все"
      link="/profile"
      onPress={onCategoryPress}
    />
  </>
));

export default function HomeScreen() {
  const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];

  const handleCategoryOnPress = () => {};

  const renderSection = useCallback(
    ({section}) => (
      <View style={{flex: 1}}>
        <FlashList
          data={PRODUCT_DATA}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 8,
            paddingBottom: 80,
          }}
          renderItem={({item}) => <ProductCard product={item} key={item.id} />}
          keyExtractor={item => item.id}
          estimatedItemSize={300}
          showsVerticalScrollIndicator={false}
        />
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: textColors.pureWhite}}>
      <View style={styles.searchHeader}>
        <Pressable>
          <LinearWrapper style={styles.locationBox}>
            <LocationColorfulSvg width={24} height={24} />
            <UrbanistMediumText numberOfLines={1} style={styles.locationTxt}>
              Ташкент, Мирзо Улугбек район, Карасув-3, улица Мингбулок, 38.
            </UrbanistMediumText>
          </LinearWrapper>
        </Pressable>
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

      <SectionList
        ListHeaderComponent={
          <ListHeaderComponent onCategoryPress={handleCategoryOnPress} />
        }
        style={{flex: 1}}
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section: {title}}) => (
          <View style={{backgroundColor: textColors.backgroundBlur}}>
            <CategoryScrollView subCategories={subCategories} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 6,
  },
  locationBox: {
    width: 310,
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  locationTxt: {
    marginLeft: 10,
    width: 252,
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.2,
    color: textColors.pureWhite,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: textColors.grey2,
    justifyContent: 'space-between',
    width: 395,
    alignItems: 'center',
    height: 56,
    borderRadius: 15,
    marginHorizontal: 16,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  searchBoxElement: {
    marginHorizontal: 3,
    padding: 5,
  },
});
