import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {WishlistHeartSvg} from '../assets/icons/favorite-heart';
import {CustomHeader} from '../components/app-components/go-back';
import RatingScrollFilter from '../components/app-components/rating-scroll-filter';
import {
  UrbanistBoldText,
  UrbanistSemiboldText,
  UrbanistMediumText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {SafeAreaView} from '../components/Themed';
import AntDesign from 'react-native-vector-icons/AntDesign';

const reviews = [
  {
    id: '1',
    name: 'Abbos Xazratov',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
    reviewText:
      'Отличный товар, прибыл вовремя и в соответствии с описанием. Настоятельно рекомендую! 👌👌',
    likes: 729,
    date: '6 дней назад',
  },
  {
    id: '2',
    name: 'Muslima Ahmad',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
    reviewText:
      'Продавец очень быстро отправил посылку, я только что купил её, и товар прибыл всего за 1 день! 👍👍',
    likes: 625,
    date: '6 дней назад',
  },
  {
    id: '3',
    name: 'Chicco Chicco',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
    reviewText: `Продавец очень быстро отправил посылку, я только что купил её, и товар прибыл всего за 1 день! 👍👍\nОтличный товар, прибыл вовремя и в соответствии с описанием. Настоятельно рекомендую! 👌👌`,
    likes: 625,
    date: '6 дней назад',
  },
  {
    id: '4',
    name: 'Muslima Ahmad',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
    reviewText:
      'Продавец очень быстро отправил посылку, я только что купил её, и товар прибыл всего за 1 день! 👍👍',
    likes: 625,
    date: '6 дней назад',
  },
  {
    id: '5',
    name: 'Chicco Chicco',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
    reviewText: `Продавец очень быстро отправил посылку, я только что купил её, и товар прибыл всего за 1 день! 👍👍\nОтличный товар, прибыл вовремя и в соответствии с описанием. Настоятельно рекомендую! 👌👌`,
    likes: 625,
    date: '6 дней назад',
  },
  {
    id: '6',
    name: 'Abbos Xazratov',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
    reviewText:
      'Отличный товар, прибыл вовремя и в соответствии с описанием. Настоятельно рекомендую! 👌👌',
    likes: 729,
    date: '6 дней назад',
  },
  // Add more reviews as needed
];

const ratings = ['All', 5, 4, 3, 2];

export default function ReviewScreen() {
  // const [selectedRating, setSelectedRating] = useState('All');

  const renderReview = ({item}: {item: any}) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <UrbanistBoldText style={styles.name}>{item.name}</UrbanistBoldText>
        </View>

        <View style={styles.ratingContainer}>
          <View key={item} style={styles.ratingBox}>
            <AntDesign name="star" size={12} color={textColors.purple} />
            <UrbanistSemiboldText style={styles.ratingNumber}>
              {item.rating}
            </UrbanistSemiboldText>
          </View>
        </View>
      </View>

      <View style={styles.reviewContent}>
        <UrbanistMediumText style={styles.reviewText}>
          {item.reviewText}
        </UrbanistMediumText>
        <View style={styles.reviewFooter}>
          <View style={styles.likesContainer}>
            <WishlistHeartSvg />
            <UrbanistMediumText style={styles.likes}>
              {item.likes}
            </UrbanistMediumText>
          </View>
          <UrbanistMediumText style={styles.date}>
            {item.date}
          </UrbanistMediumText>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <CustomHeader
        style={{marginBottom: 10, paddingHorizontal: 16}}
        title="4.7 (4,749 отзывов)"
      />

      <RatingScrollFilter ratings={ratings} />

      {/* Reviews List */}
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={item => item.id}
        style={styles.reviewList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8e44ad',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: '#8e44ad',
  },
  activeFilterText: {
    color: '#fff',
  },
  reviewList: {
    marginBottom: 16,
  },
  reviewContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: textColors.pureWhite,
  },
  reviewHeader: {
    height: 48,
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  reviewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesContainer: {
    width: 52,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 24,
  },
  likes: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: textColors.navyBlack,
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: textColors.darkGrey,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingBox: {
    height: 32,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: textColors.purple,
    borderRadius: 38,
    backgroundColor: 'transparent',
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingNumber: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: textColors.purple,
  },
});
