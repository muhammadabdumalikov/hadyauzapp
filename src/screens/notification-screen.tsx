import {ScrollView, StyleSheet, View} from 'react-native';
import {GoBackButton} from '../components/app-components/go-back';
import {NotificationList} from '../components/app-components/notifiсation-element';
import {UrbanistBoldText} from '../components/StyledText';
import {textColors} from '../constants/Colors';
import {SafeAreaView} from '../components/Themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    date: '2024-08-30',
    notifications: [
      {
        body: 'Специальная акция действует только сегодня',
        title: 'Пополните свой кошелек!',
      },
    ],
  },
  {
    date: '2024-08-29',
    notifications: [
      {
        body: 'Теперь вы можете отслеживать заказы в режиме реального времени',
        title: 'Доступны новые услуги!',
      },
    ],
  },
  {
    date: '2024-08-25',
    notifications: [
      {
        body: 'Теперь вы можете отслеживать заказы в режиме реального времени',
        title: 'Настройка учетной записи прошла успешно!',
      },
    ],
  },
  {
    date: '2024-08-21',
    notifications: [
      {
        body: 'Теперь вы можете отслеживать заказы в режиме реального времени',
        title: 'Настройка учетной записи прошла успешно!',
      },
    ],
  },
  {
    date: '2024-08-29',
    notifications: [
      {
        body: 'Теперь вы можете отслеживать заказы в режиме реального времени',
        title: 'Доступны новые услуги!',
      },
    ],
  },
  {
    date: '2024-08-30',
    notifications: [
      {
        body: 'Специальная акция действует только сегодня',
        title: 'Пополните свой кошелек!',
      },
    ],
  },
  {
    date: '2024-08-30',
    notifications: [
      {
        body: 'Специальная акция действует только сегодня',
        title: 'Пополните свой кошелек!',
      },
    ],
  },
  {
    date: '2024-08-29',
    notifications: [
      {
        body: 'Теперь вы можете отслеживать заказы в режиме реального времени',
        title: 'Доступны новые услуги!',
      },
    ],
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.goBackRow}>
        <View style={styles.goBackBox}>
          <GoBackButton />
          <UrbanistBoldText style={styles.screenNameTxt}>
            Уведомление
          </UrbanistBoldText>
        </View>
        <Ionicons
          style={styles.moreIcon}
          name="ellipsis-horizontal-circle"
          size={24}
          color="black"
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        {notifications.length > 0 &&
          notifications?.map((item, index) => (
            <NotificationList
              date={item.date}
              notifications={item.notifications}
              key={index}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.grey2,
  },
  containerStyle: {
    alignItems: 'center',
    paddingBottom: 55,
  },
  goBackRow: {
    width: '100%',
    flexDirection: 'row',
    height: 68,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: textColors.grey2,
  },
  goBackBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: textColors.grey2,
  },
  screenNameTxt: {
    marginLeft: 16,
    fontWeight: '700',
    fontSize: 24,
  },
  moreIcon: {
    padding: 8,
    backgroundColor: textColors.grey1,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
