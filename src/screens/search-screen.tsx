import {FlashList} from '@shopify/flash-list';
import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchInputBox} from '../components/app-components/input-box';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import {ProductCard} from '../components/app-components/product-card';
import RatingScrollFilter from '../components/app-components/rating-scroll-filter';
import {SeeAllHeader} from '../components/app-components/see-all-header';
import {CategoryScrollView} from '../components/app-components/selected-categories-scroll';
import {
  UrbanistBoldText,
  UrbanistSemiboldText,
  UrbanistMediumText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {PRODUCT_DATA} from '../constants/data';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const {width} = Dimensions.get('screen');

const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];
const ratings = ['Все', 5, 4, 3, 2, 1];

export interface MyRefType {
  open: () => void;
  close: () => void;
}

export function SearchScreen({navigation}) {
  const refRBSheet = useRef<MyRefType>(null);
  const [priceRange, setPriceRange] = useState([100000, 1200000]);
  const [lastSearches, setLastSearches] = useState([
    'sports',
    'phones',
    'apple',
  ]);
  const [screen, setScreen] = useState('');
  const [isLoading, setLoading] = useState(false);

  const priceDistribution = [
    10, 50, 80, 100, 60, 30, 90, 70, 110, 60, 90, 20, 30, 70, 50, 100, 90, 110,
  ];

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const handleSearch = (input: string) => {
    setLoading(true);
    setScreen(input);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleClearAll = () => {
    setLastSearches([]);
  };

  const handleDeleteLastSearch = (index: number) => {
    setLastSearches(prev => {
      return lastSearches.slice(0, index).concat(lastSearches.slice(index + 1));
    });
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size={'large'}
        color={'red'}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerBox}>
          <Pressable onPress={navigation.goBack} style={styles.goBackBtn}>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
          <SearchInputBox
            style={styles.inputBox}
            handleSearch={handleSearch}
            openBottomSheet={openBottomSheet}
            placeholder={screen}
          />
        </View>

        <RBSheet
          ref={refRBSheet}
          height={770}
          openDuration={300}
          draggable
          // dragOnContent
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
          }}>
          <ScrollView
            contentContainerStyle={styles.sheetContent}
            style={{flex: 1}}
            nestedScrollEnabled>
            <UrbanistBoldText style={styles.title}>
              Сортировка и фильтр
            </UrbanistBoldText>

            {/* Categories */}
            <UrbanistSemiboldText style={styles.sectionTitle}>
              Категории
            </UrbanistSemiboldText>
            <CategoryScrollView
              subCategories={subCategories}
              nestedScrollEnabled
            />

            {/* Price Slider */}
            <UrbanistSemiboldText style={styles.sectionTitle}>
              Цена, сум
            </UrbanistSemiboldText>

            {/* Custom bar chart below the slider */}
            <View style={styles.chartContainer}>
              {priceDistribution.map((height, index) => (
                <View
                  key={index}
                  style={{
                    height: `${(height / (80 + 20)) * 100}%`,
                    width: 4,
                    backgroundColor: textColors.grey6,
                    marginHorizontal: 1,
                    borderTopRightRadius: 4,
                    borderTopLeftRadius: 4,
                  }}
                />
              ))}
            </View>

            <MultiSlider
              values={priceRange}
              min={100000}
              max={1200000}
              step={10000}
              onValuesChange={setPriceRange}
              containerStyle={{alignItems: 'center'}}
              sliderLength={width - 60}
              selectedStyle={{backgroundColor: textColors.purple}} // Track between thumbs
              unselectedStyle={{backgroundColor: textColors.grey3}} // Track outside thumbs
              trackStyle={{height: 4}}
              customMarker={() => (
                <View style={styles.markerOutlineBox}>
                  <View style={styles.markerInlineBox}></View>
                </View>
              )}
            />
            <UrbanistSemiboldText style={styles.sliderLabel}>
              {`${priceRange[0]
                .toLocaleString()
                .replace('/,/g', ' ')} - ${priceRange[1]
                .toLocaleString()
                .replace('/,/g', ' ')}`}
            </UrbanistSemiboldText>

            {/* Sort by */}
            <UrbanistBoldText style={styles.sectionTitle}>
              Сортировать по
            </UrbanistBoldText>
            <CategoryScrollView
              subCategories={subCategories}
              nestedScrollEnabled
            />

            {/* Rating */}
            <UrbanistBoldText style={styles.sectionTitle}>
              Рейтинг
            </UrbanistBoldText>
            <RatingScrollFilter ratings={ratings} nestedScrollEnabled />

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              <Pressable style={styles.resetButton}>
                <Text style={styles.resetText}>Сбросить</Text>
              </Pressable>
              <LinearWrapper style={styles.applyButton}>
                <Pressable>
                  <Text style={styles.applyText}>Применить</Text>
                </Pressable>
              </LinearWrapper>
            </View>
          </ScrollView>
        </RBSheet>

        {screen.length === 0 ? (
          <>
            <SeeAllHeader
              headerName="Last Search"
              btnName="Clear all"
              onPress={handleClearAll}
            />
            <View style={styles.lastSearchBox}>
              {lastSearches.map((item, index) => (
                <Pressable
                  style={styles.lastSearchElement}
                  key={index}
                  onPress={() => handleSearch(item)}>
                  <View style={styles.circleTxt}>
                    <AntDesign
                      name="clockcircleo"
                      size={20}
                      color={textColors.darkGrey}
                    />
                    <UrbanistMediumText
                      style={styles.lastSearchTxt}
                      numberOfLines={1}>
                      {item}
                    </UrbanistMediumText>
                  </View>
                  <Pressable
                    style={styles.removeSearchBox}
                    onPress={() => handleDeleteLastSearch(index)}>
                    <AntDesign
                      name="close"
                      size={14}
                      color={textColors.darkGrey}
                    />
                  </Pressable>
                </Pressable>
              ))}
            </View>
          </>
        ) : (
          <>
            <SeeAllHeader
              headerName={`"${screen}"`}
              btnName="Очистить все"
              onPress={handleClearAll}
            />

            {/* <View style={{ flex: 1 }}> */}
            <FlashList
              data={PRODUCT_DATA}
              contentContainerStyle={{
                backgroundColor: textColors.pureWhite,
                paddingHorizontal: 8,
                paddingBottom: 80,
              }}
              numColumns={2}
              renderItem={({item}) => (
                <ProductCard key={item.id} product={item} />
              )}
              keyExtractor={item => item.id}
              estimatedItemSize={300}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  headerBox: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  inputBox: {
    width: 360,
    marginBottom: 0,
    marginLeft: 0,
  },
  lastSearchBox: {
    paddingHorizontal: 25,
  },
  lastSearchElement: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastSearchTxt: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
    color: textColors.darkGrey,
  },
  goBackBtn: {
    paddingRight: 10,
    paddingVertical: 5,
  },
  removeSearchBox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: textColors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 48,
    alignSelf: 'center',
    letterSpacing: 0.5,
  },
  sheetContent: {
    // paddingBottom: (80),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 24,
    marginHorizontal: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 16,
    alignItems: 'flex-end',
  },
  sliderLabel: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: 'red',
    marginTop: 20,
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  markerOutlineBox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: textColors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerInlineBox: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: textColors.pureWhite,
  },
});
