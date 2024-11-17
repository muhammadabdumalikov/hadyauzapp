import React, {useCallback} from 'react';
import {
  Pressable,
  View,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
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
// import {FeatherIcon, MaterialCommunityIconIcon} from '@/vector-icons/glyphmaps';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import {fetchProductsForHome} from '@/service/api/categort-list';
import {useQuery} from '@tanstack/react-query';

const ListHeaderComponent = React.memo(
  ({
    onCategoryPress,
    onSearchInputPress,
  }: {
    onCategoryPress: () => void;
    onSearchInputPress: () => void;
  }) => (
    <>
      <Pressable style={[styles.inputBox]} onPress={onSearchInputPress}>
        <Feather name="search" size={24} color={textColors.navyBlack} />
        <MaterialCommunityIcon
          name="tune-variant"
          size={24}
          color={textColors.navyBlack}
        />
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
  ),
);

export default function HomeScreen({navigation}) {
  const {data, error, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductsForHome,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text style={{marginTop: 100}}>Error: {error.message}</Text>;
  }

  const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];

  const handleCategoryOnPress = () => {};

  const openWishlishScreen = () => {
    navigation.navigate('wishlist-screen');
  };

  const openNotificationScreen = () => {
    navigation.navigate('notification-screen');
  };

  const openSearchScreen = () => {
    navigation.navigate('search-screen');
  };

  const renderSection = useCallback(
    ({section}) => (
      <View style={{flex: 1}}>
        <FlashList
          data={(data as unknown as IProduct[]) || []} // Assuming data structure
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
        <Pressable style={{flexGrow: 1}}>
          <LinearWrapper style={styles.locationBox}>
            <LocationColorfulSvg width={24} height={24} />
            <View style={styles.textContainer}>
              <UrbanistMediumText numberOfLines={1} style={styles.locationTxt}>
                Ташкент, Мирзо Улугбек район, Карасув-3, улица Мингбулок,
                38.sdadasdad
              </UrbanistMediumText>
            </View>
          </LinearWrapper>
        </Pressable>
        <Pressable
          style={styles.searchBoxElement}
          onPress={openNotificationScreen}>
          <BellIcon width={30} height={30} color={textColors.navyBlack} />
        </Pressable>
        <Pressable style={styles.searchBoxElement} onPress={openWishlishScreen}>
          <WishlistHeartSvg
            width={30}
            height={30}
            color={textColors.navyBlack}
          />
        </Pressable>
      </View>

      <SectionList
        ListHeaderComponent={
          <ListHeaderComponent
            onCategoryPress={handleCategoryOnPress}
            onSearchInputPress={openSearchScreen}
          />
        }
        style={{flex: 1}}
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section: {title}}) => (
          <BlurView
            blurAmount={20}
            blurType="light"
            style={{backgroundColor: textColors.backgroundBlur}}>
            <CategoryScrollView subCategories={subCategories} />
          </BlurView>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    alignItems: 'center',
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 6,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  locationBox: {
    height: 45,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1, // Allows text to take remaining space
    marginLeft: 10,
  },
  locationTxt: {
    fontWeight: '400',
    fontSize: 15,
    letterSpacing: 0.2,
    color: textColors.pureWhite,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: textColors.grey2,
    justifyContent: 'space-between',
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
