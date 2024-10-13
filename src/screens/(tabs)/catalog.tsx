
import { BellIcon } from '@/assets/icons/bell';
import { WishlistHeartSvg } from '@/assets/icons/favorite-heart';
import { UrbanistMediumText, UrbanistBoldText, UrbanistSemiboldText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';

const categories = [
  'Дом',
  'Бизнес',
  'Романтика',
  'Семья и дети',
  'Еда и напитки',
  'Практичные вещи',
  'Юмор и сувениры',
  'Игры и игрушки',
  'Коллекционирование',
  'Красота и уход',
  'Украшения',
  'Мода и стиль',
  'Дача',
  'Другие разделы',
];

const itemsByCategory = {
  Бизнес: [
    {name: 'Подарки шефу'},
    {name: 'Бизнес-аксессуары'},
    {name: 'Корпоративные сувениры'},
    {name: 'Настольные наборы'},
    {name: 'Письменные наборы'},
    {name: 'Подарочные ручки'},
  ],
  Дом: [
    {name: 'Ежедневники'},
    {name: 'Книги-сейфы'},
    {name: 'Карманные визитницы'},
    {name: 'Настольные визитницы'},
    {name: 'Настольные часы'},
  ],
  // Add more categories and items here...
};

const CatalogScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Бизнес'); // Default to 'Бизнес'

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Image
        source={require('@/assets/images/lego.png')}
        style={styles.itemImage}
      />
      <UrbanistMediumText style={styles.itemText}>
        {item.name}
      </UrbanistMediumText>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerText}>Каталог</UrbanistBoldText>
        <View style={{flexDirection: 'row'}}>
          {/* <Link href='/screens/notification-screen' asChild> */}
          <Pressable style={styles.searchBoxElement}>
            <BellIcon width={30} height={30} color={textColors.navyBlack} />
          </Pressable>
          {/* <Link href='/screens/wishlist-screen' asChild> */}
          <Pressable style={styles.searchBoxElement}>
            <WishlistHeartSvg
              width={30}
              height={30}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.content}>
        {/* Sidebar */}
        <ScrollView style={styles.sidebar}>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategoryItem,
              ]}
              onPress={() => setSelectedCategory(category)}>
              <View
                style={[
                  styles.categoryTextBox,
                  selectedCategory === category &&
                    styles.selectedCategoryTextBox,
                ]}>
                {selectedCategory === category ? (
                  <UrbanistSemiboldText
                    numberOfLines={2}
                    style={[styles.categoryText, styles.selectedCategoryText]}>
                    {category}
                  </UrbanistSemiboldText>
                ) : (
                  <UrbanistMediumText
                    numberOfLines={2}
                    style={styles.categoryText}>
                    {category}
                  </UrbanistMediumText>
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* Dynamic Content based on selected category */}
        <FlashList
          data={itemsByCategory[selectedCategory]} // Load items based on the selected category
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          estimatedItemSize={10}
          contentContainerStyle={styles.gridContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    maxWidth: 110,
    width: 110,
    backgroundColor: textColors.softPurple,
    paddingTop: 8,
    paddingLeft: 8,
  },
  categoryItem: {
    height: 34,
    maxHeight: 45,
    width: 102,
    marginBottom: 8,
    paddingLeft: 8,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  categoryTextBox: {
    height: 34,
    maxHeight: 45,
    width: 86,
    paddingVertical: 2,
    justifyContent: 'center',
  },
  selectedCategoryTextBox: {},
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: textColors.navyBlack,
  },
  selectedCategoryItem: {
    backgroundColor: textColors.pureWhite,
  },
  selectedCategoryText: {
    fontWeight: '700',
    color: textColors.purple,
  },
  gridContent: {
    paddingHorizontal: 8,
    paddingBottom: 80,
  },
  item: {
    width: 86,
    height: 100,
    alignItems: 'center',
    marginVertical: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.softPurple,
    borderRadius: 15,
    overflow: 'hidden',
  },
  itemText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default CatalogScreen;
