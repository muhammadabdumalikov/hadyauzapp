import {useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {CustomHeader} from '../components/app-components/go-back';
import {UrbanistMediumText} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {SafeAreaView} from '../components/Themed';

export default function NotificationSettingsScreen() {
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
          Общее уведомление
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
        <UrbanistMediumText style={styles.rowTxt}>Звук</UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{false: textColors.grey3, true: textColors.purple}}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>

      <View style={styles.row}>
        <UrbanistMediumText style={styles.rowTxt}>Вибрация</UrbanistMediumText>
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
          Специальные предложения
        </UrbanistMediumText>
        <Switch
          style={styles.switch}
          trackColor={{false: textColors.grey3, true: textColors.purple}}
          thumbColor={darkMode ? textColors.pureWhite : textColors.pureWhite}
          onValueChange={handleSwitchChange}
          value={darkMode}
        />
      </View>
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
});
