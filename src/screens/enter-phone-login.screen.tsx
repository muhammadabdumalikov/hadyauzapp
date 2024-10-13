import {useMutation} from '@tanstack/react-query';
import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Chase} from 'react-native-animated-spinkit';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearWrapper} from '../components/app-components/linear-wrapper';
import Toast from '../components/app-components/toast/toast';
import {
  UrbanistBoldText,
  UrbanistSemiboldTextInput,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {loginClient} from '../service/api/auth';

export default function PhoneNumberScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('+998');
  const [disabled, setDisabled] = useState(false);
  const toastRef = useRef();

  const mutation = useMutation({
    mutationFn: loginClient,
    onSuccess: data => {
      console.log(data);

      if (data?.success) {
        setDisabled(false);
        navigation.push({
          pathname: 'screens/enter-otp.screen',
          params: {phoneNumber},
        });
      }
    },
    onError: error => {
      toastRef?.current.show({
        type: 'error',
        text: 'Something went wrong',
        duration: 2000,
      });
      setDisabled(false);
    },
  });

  // Function to trigger the login mutation
  const handleLogin = () => {
    setDisabled(true);
    mutation.mutate(phoneNumber.replace(/\+|\s/g, ''));
  };

  // Handle input change and format dynamically
  const handleInputChange = useCallback(
    (text: string) => {
      if (!disabled) {
        setPhoneNumber(text);
      }
    },
    [disabled],
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={true}>
        <SafeAreaView style={styles.container}>
          <Toast ref={toastRef} />
          <View style={{marginTop: 100}}>
            {/* <CustomHeader title='' /> */}

            {/* Title */}
            <UrbanistBoldText style={styles.title}>
              Введите номер телефона
            </UrbanistBoldText>

            {/* Phone Number Input */}
            <UrbanistSemiboldTextInput
              style={styles.input}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handleInputChange}
              placeholder="+998"
              maxLength={13}
            />

            {/* Submit Button */}
            <Pressable
              onPress={handleLogin}
              disabled={disabled || phoneNumber.length < 13}>
              <LinearWrapper style={styles.button}>
                {disabled ? (
                  <Chase
                    color={textColors.pureWhite}
                    // style={}
                    size={32}
                  />
                ) : (
                  <UrbanistBoldText style={styles.buttonText}>
                    Получить код
                  </UrbanistBoldText>
                )}
              </LinearWrapper>
            </Pressable>
          </View>

          {/* Terms and Privacy Policy */}
          <Text style={styles.termsText}>
            Авторизуясь, Вы принимаете{' '}
            <Text
              style={[styles.termsText, styles.linkText]}
              onPress={() => Linking.openURL('https://yourapp.com/terms')}>
              пользовательское соглашение
            </Text>
            и
            <Text
              style={[styles.termsText, styles.linkText]}
              onPress={() => Linking.openURL('https://yourapp.com/privacy')}>
              политику обработки персональных данных
            </Text>
          </Text>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: textColors.pureWhite,
    justifyContent: 'space-between',
  },
  backArrow: {
    fontSize: 28,
    color: 'black',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    textAlign: 'left',
    marginTop: 40,
  },
  input: {
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 24,
    marginBottom: 20,
    marginTop: 48,
    color: 'black',
  },
  button: {
    height: 58,
    borderRadius: 100,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  termsText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 19,
    letterSpacing: 0.2,
    marginBottom: 48,
  },
  linkText: {
    color: textColors.purple,
  },
});
