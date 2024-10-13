import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomHeader} from '../components/app-components/go-back';
import Toast, {MyToastRefType} from '../components/app-components/toast/toast';
import {
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {MotiView} from 'moti';
import {isNumber} from 'lodash';
import {useMutation} from '@tanstack/react-query';
import {confirmOtp} from '../service/api/auth';

const {width} = Dimensions.get('window');

// Constants
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'space', 0, 'delete'] as const;
const passcodeLength = 5;
const _keySize = width / 4;
const _passcodeSpacing = (width - 3 * _keySize) / 2;
const _passCodeSize = width / (passcodeLength + 2); // 60

// Types
type Keys = (typeof keys)[number];
type PassCodeProps = {
  passcode: Keys[];
  isValid: boolean;
};
type PassCodeKeyboardProps = {
  onPress: (key: Keys) => void;
};

const PassCodeKeyboard = ({onPress}: PassCodeKeyboardProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      {keys.map(key => {
        if (key === 'space') {
          return <View style={{width: _keySize}} key="space" />;
        }
        return (
          <TouchableOpacity
            onPress={() => onPress(key)}
            key={key}
            style={{
              width: _keySize,
              height: _keySize,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              {key === 'delete' ? (
                <Ionicons
                  name="backspace-outline"
                  size={32}
                  color="rgba(0,0,0,0.3)"
                />
              ) : (
                <Text style={{color: '#000', fontSize: 32, fontWeight: '700'}}>
                  {key}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const inputAnimationDelays = [400, 300, 200, 100];

const PassCode = ({passcode, isValid}: PassCodeProps) => {
  const shakeAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (!isValid && passcode.length === passcodeLength) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isValid, passcode, shakeAnimation]);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        marginVertical: _passcodeSpacing,
        gap: _passCodeSize / 5,
        transform: [{translateX: shakeAnimation}],
        alignSelf: 'center',
      }}>
      {[...Array(passcodeLength).keys()].map(i => {
        return (
          <View
            key={`passcode-${i}-${passcode[i]}`}
            style={{
              width: _passCodeSize,
              height: _passCodeSize,
              borderRadius: 12,
              backgroundColor: 'rgba(0,0,0,0.1)',
            }}>
            {isNumber(passcode[i]) && (
              <MotiView
                key={`passcode-${i}-${i}`}
                from={{scale: 0}}
                animate={{
                  scale:
                    isValid && passcode.length === passcodeLength
                      ? [1.1, 1]
                      : 1,
                  borderWidth: 1,
                  borderColor:
                    isValid && passcode.length === passcodeLength
                      ? textColors.green2
                      : textColors.purple,
                }}
                exit={{scale: 0}}
                transition={{
                  type: 'timing',
                  duration: 500,
                  easing: Easing.elastic(1.1),
                  borderColor: {
                    delay:
                      isValid && passcode.length === passcodeLength
                        ? inputAnimationDelays[i]
                        : 0,
                  },
                }}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    fontSize: _passCodeSize / 2,
                    color: textColors.purple,
                    fontWeight: '700',
                  }}>
                  {passcode[i]}
                </Text>
              </MotiView>
            )}
          </View>
        );
      })}
    </Animated.View>
  );
};

export function PassCodeV1({navigation, route}) {
  const [passcode, setPasscode] = React.useState<Keys[]>([]);
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const {phoneNumber} = route.params;
  const toastRef = useRef<MyToastRefType>();

  const mutation = useMutation({
    mutationFn: confirmOtp,
    onSuccess: data => {
      console.log(data);

      if (data?.success) {
        setIsValid(true);
        navigation.replace('(tabs)');
      }
    },
    onError: error => {
      toastRef?.current.show({
        type: 'error',
        text: error.message, //'Something went wrong',
        duration: 2000,
      });
    },
  });

  React.useEffect(() => {
    if (passcode.length === passcodeLength) {
      mutation.mutate({
        phone: (phoneNumber as string).replace(/\+|\s/g, ''),
        otpCode: passcode.join(''),
      });
    }
  }, [mutation, passcode, phoneNumber]);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 24}}>
      <Toast ref={toastRef} />

      <CustomHeader title="Введите код" />

      <UrbanistMediumText style={styles.description}>
        Для подтверждения телефона отправили 5-значный код на{' '}
        <UrbanistSemiboldText style={styles.boldText}>
          +998 90 123 45 67
        </UrbanistSemiboldText>
      </UrbanistMediumText>

      <PassCode
        passcode={passcode}
        isValid={passcode.length !== passcodeLength || isValid}
      />
      <PassCodeKeyboard
        onPress={char => {
          if (char === 'delete') {
            setPasscode(passcode =>
              passcode.length === 0
                ? []
                : passcode.slice(0, passcode.length - 1),
            );
            return;
          }
          if (passcode.length === passcodeLength) {
            return;
          }

          setPasscode(passcode => [...passcode, char]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 17,
    color: textColors.darkGrey,
    marginTop: 110,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
