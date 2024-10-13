import React, {useState} from 'react';
import {StyleSheet, LayoutChangeEvent} from 'react-native';
import {View} from '../Themed';
import {UrbanistBoldText, UrbanistMediumText} from '../StyledText';
import {textColors} from '@/constants/Colors';
import {LinearGradient} from 'react-native-svg';
import {checkDateRelation} from '@/utils/check-date-relation';
import {NotificationSale} from '@/assets/icons/notification-sale';

export interface INotificationListParams {
  date: string;
  notifications: Array<{
    title: string;
    body: string;
  }>;
}

export const NotificationList = ({
  notifications,
  date,
}: INotificationListParams) => {
  return (
    <View style={styles.notificationContainer}>
      <UrbanistBoldText style={styles.dateTxt}>
        {checkDateRelation(date)}
      </UrbanistBoldText>
      {notifications?.map((notification, index) => (
        <NotificationItem key={index} notification={notification} />
      ))}
    </View>
  );
};

const NotificationItem = ({
  notification,
}: {
  notification: {title: string; body: string};
}) => {
  const [titleLines, setTitleLines] = useState(2);
  const [bodyLines, setBodyLines] = useState(1);

  const onTitleLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    const lineHeight = styles.notificationTitle.fontSize * 1.2; // Assuming line height is 1.2 times font size
    const calculatedLines = Math.round(height / lineHeight);

    if (calculatedLines > 1) {
      setTitleLines(2);
      setBodyLines(1);
    } else {
      setTitleLines(1);
      setBodyLines(2);
    }
  };

  return (
    <View style={styles.notificationBox}>
      <LinearGradient
        colors={['#7210FF', '#9D59FF']}
        style={[
          {justifyContent: 'center', alignItems: 'center', borderRadius: 30},
          styles.notificationImage,
        ]}>
        <NotificationSale height={28} width={28} />
      </LinearGradient>

      <View style={styles.notificationDetails}>
        <UrbanistBoldText
          numberOfLines={titleLines}
          style={styles.notificationTitle}
          onLayout={onTitleLayout}>
          {notification.title}
        </UrbanistBoldText>
        <UrbanistMediumText
          numberOfLines={bodyLines}
          style={styles.notificationBody}>
          {notification.body}
        </UrbanistMediumText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    backgroundColor: textColors.grey2,
  },
  dateTxt: {
    width: '100%',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  notificationBox: {
    flexDirection: 'row',
    height: 102,
    backgroundColor: textColors.pureWhite,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  notificationImage: {
    height: 68,
    width: 68,
    marginRight: 20,
  },
  notificationDetails: {
    flex: 1,
    justifyContent: 'space-around',
  },
  notificationTitle: {
    fontWeight: '700',
    fontSize: 18,
    maxHeight: 46,
  },
  notificationBody: {
    fontWeight: '500',
    fontSize: 14,
  },
});
