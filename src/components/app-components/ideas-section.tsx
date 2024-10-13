import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {UrbanistSemiboldText} from '../StyledText';
import {textColors} from '@/constants/Colors';
import { compareProps } from '@/utils/compare-props';

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
];

export type Props = {
  product: any;
};

const IdeasSectionComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <TouchableOpacity key={item.id} style={styles.itemContainer}>
          <View style={styles.imageBox}>
            <Image source={item.image} style={styles.image} />
          </View>
          <UrbanistSemiboldText numberOfLines={2} style={styles.title}>
            {item.title}
          </UrbanistSemiboldText>
        </TouchableOpacity>
      ))}

      <TouchableOpacity key={8} style={styles.itemContainer}>
        <View style={styles.imageBox}>
          <Image
            source={require('@/assets/images/section-all.png')}
            style={styles.imageAllSection}
          />
        </View>
        <UrbanistSemiboldText numberOfLines={2} style={styles.title}>
          Все поводы
        </UrbanistSemiboldText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '22%', // 22% to make sure you have space for gaps
    marginVertical: 10,
    alignItems: 'center',
  },
  imageBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.softPurple,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    left: 10,
    top: 10,
    resizeMode: 'contain',
  },
  imageAllSection: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },
});

export const IdeasSection = React.memo(
  IdeasSectionComponent,
  compareProps<Props>(['product']),
);
