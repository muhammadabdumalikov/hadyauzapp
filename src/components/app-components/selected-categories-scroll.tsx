import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {UrbanistSemiboldText} from '../StyledText';
import {LinearWrapper} from './linear-wrapper';
import {ScrollViewProps} from '../Themed';
import {textColors} from '@/constants/Colors';

export function CategoryScrollView(
  props: ScrollViewProps & {subCategories: string[]},
) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        {
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5,
        },
        props?.contentContainerStyle,
      ]}
      style={[{marginBottom: 15}, props?.style]}>
      {props.subCategories?.map(item =>
        selectedCategory === item ? (
          <Pressable key={item} onPress={() => setSelectedCategory(item)}>
            <LinearWrapper
              style={{
                height: 38,
                paddingHorizontal: 20,
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: textColors.purple,
                borderRadius: 38,
                backgroundColor:
                  selectedCategory === item ? textColors.purple : 'transparent', // Conditionally change background color
                marginHorizontal: 6,
              }}>
              <UrbanistSemiboldText
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color:
                    selectedCategory === item ? 'white' : textColors.purple, // Conditionally change text color
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
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: textColors.purple,
              borderRadius: 38,
              backgroundColor:
                selectedCategory === item ? textColors.purple : 'transparent', // Conditionally change background color
              marginHorizontal: 6,
            }}>
            <UrbanistSemiboldText
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: selectedCategory === item ? 'white' : textColors.purple, // Conditionally change text color
              }}>
              {item}
            </UrbanistSemiboldText>
          </Pressable>
        ),
      )}
    </ScrollView>
  );
}
