import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {LinearWrapper} from './linear-wrapper';
import {UrbanistSemiboldText} from '../StyledText';
import {textColors} from '@/constants/Colors';

export default function BottomButton(props: PressableProps & {text: string}) {
  return (
    <Pressable
      style={[
        {
          width: '100%',
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
  );
}

const styles = StyleSheet.create({
  updateButton: {
    width: '100%',
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
