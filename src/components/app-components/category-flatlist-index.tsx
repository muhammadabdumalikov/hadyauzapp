import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {UrbanistSemiboldText} from '../StyledText';
import {textColors} from '@/constants/Colors';

const data = [
  {
    id: '1',
    title: 'День рождения',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '2',
    title: 'Проф. праздники',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '3',
    title: 'Подарочные наборы',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '4',
    title: 'День учителя',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '5',
    title: 'Юбилей',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '6',
    title: 'Свадьба',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '7',
    title: 'Подарочные наборы',
    image: require('@/assets/images/surprise-box.png'),
  },
  {
    id: '8',
    title: 'Все поводы',
    image: require('@/assets/images/surprise-box.png'),
  },
];

export const CategoryFlatlist = () => {
  return (
    <View style={styles.container}>
      {data?.map(item => (
        <TouchableOpacity key={item.id} style={styles.itemContainer}>
          <View style={styles.imageBox}>
            <Image source={item.image} style={styles.image} />
          </View>
          <UrbanistSemiboldText numberOfLines={2} style={styles.title}>
            {item.title}
          </UrbanistSemiboldText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginHorizontal: 11,
    marginTop: 10,
  },
  itemContainer: {
    height: 100,
    width: '20%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    width: 60,
    height: 60,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.softPurple,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: 55,
    height: 55,
    left: 10,
    top: 10,
    resizeMode: 'contain',
  },
  title: {
    height: 28,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 14,
  },
});
