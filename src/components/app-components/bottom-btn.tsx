import React from 'react';
import {Dimensions, Pressable, PressableProps, StyleSheet} from 'react-native';
import {LinearWrapper} from './linear-wrapper';
import {UrbanistSemiboldText} from '../StyledText';
import {textColors} from '@/constants/Colors';
import {View} from '../Themed';

const {width} = Dimensions.get('screen');

export default function BottomButton(props: PressableProps & {text: string}) {
  return (
    <View style={{height: 52}}>
      <Pressable
        style={[
          {
            width: width - 32,
            position: 'absolute',
            zIndex: 4,
            bottom: 36,
          },
          props.style,
        ]}>
        <LinearWrapper style={styles.updateButton}>
          <UrbanistSemiboldText style={styles.updateButtonText}>
            {props.text}
          </UrbanistSemiboldText>
        </LinearWrapper>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  updateButton: {
    width: width - 32,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: textColors.pureWhite,
    fontSize: 16,
    fontWeight: '700',
  },
});
