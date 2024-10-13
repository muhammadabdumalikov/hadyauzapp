import {useState} from 'react';
import {Pressable, StyleSheet, Switch} from 'react-native';
import {SafeAreaView, View} from '../components/Themed';
import {CustomHeader} from '../components/app-components/go-back';
import {UrbanistMediumText, UrbanistBoldText} from '../components/StyledText';
import {textColors} from '../constants/Colors';

export function SecurityScreen() {
  const [notificationEnable, setNotificationEnable] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  const handleNotificationEnableChange = () =>
    setNotificationEnable(prev => !prev);
  const handleSwitchChange = () => setDarkMode(prev => !prev);
  // const handleSwitchChange = () => setDarkMode(prev => !prev);
  // const handleSwitchChange = () => setDarkMode(prev => !prev);

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Уведомление" />
      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>
          Помни меня
        </UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{false: textColors.grey3, true: textColors.purple}}
          thumbColor={
            notificationEnable ? textColors.pureWhite : textColors.pureWhite
          }
          onValueChange={handleNotificationEnableChange}
          value={notificationEnable}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>Face ID</UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{false: textColors.grey3, true: textColors.purple}}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>
          Биометрическое ID
        </UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{false: textColors.grey3, true: textColors.purple}}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>

      <Pressable style={styles.btn}>
        <UrbanistBoldText style={styles.btnTxt}>
          Сменить ПИН-код
        </UrbanistBoldText>
      </Pressable>

      <Pressable style={styles.btn}>
        <UrbanistBoldText style={styles.btnTxt}>
          Поменять пароль
        </UrbanistBoldText>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowTxt: {
    fontSize: 18,
    fontWeight: '500',
  },
  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}], // Adjust the size here
  },
  btn: {
    height: 60,
    backgroundColor: textColors.grey3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginTop: 24,
  },
  btnTxt: {
    fontWeight: '700',
    fontSize: 16,
  },
});
