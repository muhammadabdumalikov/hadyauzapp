import {useState, type RefObject} from 'react';
import {TextInput, View, StyleSheet, Dimensions} from 'react-native';

interface OTPInputProps {
  codes: string[];
  refs: RefObject<TextInput>[];
  errorMessages: boolean;
  onChangeCode: (text: string, index: number) => void;
  config: OTPInputConfig;
}

interface OTPInputConfig {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  errorColor: string;
  focusColor: string;
}
const {width, height} = Dimensions.get('screen');
export function OTPInput({
  codes,
  refs,
  errorMessages,
  onChangeCode,
  config,
}: OTPInputProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  console.log(width, height);

  const styles = StyleSheet.create({
    container: {
      // height: 62,
      // flexDirection: 'row',
      // width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    input: {
      fontSize: 24,
      // height: 60,
      // width: 60,
      // borderRadius: 12,
      // fontFamily: 'UrbanistBold',
      textAlign: 'center',
      backgroundColor: config.backgroundColor,
      color: config.textColor,
      borderColor: config.borderColor,
      borderWidth: 1,
    },
    errorInput: {
      borderColor: config.errorColor,
      color: config.errorColor,
    },
    focusedInput: {
      borderColor: config.focusColor,
      color: config.focusColor,
    },
  });

  const handleFocus = (index: number) => setFocusedIndex(index);
  const handleBlur = () => setFocusedIndex(null);

  return (
    <View style={styles.container}>
      {codes.map((code, index) => (
        <TextInput
          key={index}
          autoComplete="one-time-code"
          enterKeyHint="next"
          style={[
            styles.input,
            focusedIndex === index && styles.focusedInput,
            errorMessages && styles.errorInput,
          ]}
          inputMode="numeric"
          onChangeText={text => onChangeCode(text, index)}
          value={code}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          caretHidden={true}
          maxLength={index === 0 ? codes.length : 1}
          ref={refs[index]}
          onKeyPress={({nativeEvent: {key}}) => {
            if (key === 'Backspace' && index > 0) {
              onChangeCode('', index - 1);
              refs[index - 1]!.current!.focus();
            }
          }}
        />
      ))}
    </View>
  );
}
