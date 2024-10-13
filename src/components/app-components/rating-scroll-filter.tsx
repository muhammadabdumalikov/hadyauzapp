import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {UrbanistSemiboldText} from '../StyledText';
import {LinearWrapper} from './linear-wrapper';
import {ScrollViewProps} from '../Themed';
import {textColors} from '@/constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RatingScrollFilter(
  props: ScrollViewProps & {ratings: (string | number)[]},
) {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(5);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 48,
      }}
      style={{
        marginBottom: 10,
        height: 58,
      }}>
      {props.ratings?.map(item =>
        selectedCategory === item ? (
          <Pressable key={item} onPress={() => setSelectedCategory(item)}>
            <LinearWrapper
              style={{
                height: 38,
                paddingHorizontal: 20,
                borderWidth: 2,
                borderColor: textColors.purple,
                borderRadius: 38,
                backgroundColor: 'transparent',
                marginHorizontal: 6,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="star" size={16} color={textColors.pureWhite} />
              <UrbanistSemiboldText
                style={{
                  marginLeft: 8,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                }}>
                {item}
              </UrbanistSemiboldText>
            </LinearWrapper>
          </Pressable>
        ) : (
          <Pressable
            key={item}
            onPress={() => setSelectedCategory(item)}
            style={{
              height: 38,
              paddingHorizontal: 20,
              borderWidth: 2,
              borderColor: textColors.purple,
              borderRadius: 38,
              backgroundColor: 'transparent',
              marginHorizontal: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="star" size={16} color={textColors.purple} />
            <UrbanistSemiboldText
              style={{
                marginLeft: 8,
                fontSize: 16,
                fontWeight: '600',
                color: textColors.purple,
              }}>
              {item}
            </UrbanistSemiboldText>
          </Pressable>
        ),
      )}
    </ScrollView>
  );
}
