import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {ClosedBox} from '../assets/images/closed-box';
import {DeliveryReceive} from '../assets/images/delivery-receive';
import {DeliveryTruck} from '../assets/images/delivery-truck';
import {OpenedBox} from '../assets/images/opened-box';
import {CustomHeader} from '../components/app-components/go-back';
import {ProductCardFullScreenForCompleted} from '../components/app-components/product-card-full-screen';
import {
  UrbanistBoldText,
  UrbanistSemiboldText,
  UrbanistMediumText,
} from '../components/StyledText';
import {textColors} from '../constants/Colors';

const {width} = Dimensions.get('screen');

const DeliveryProcess = () => {
  const statuses = [
    {
      id: 1,
      title: 'Заказ принят - 17 декабря',
      description: 'Ваш заказ был получен',
      time: '15:20',
      completed: true,
      icon: () => <ClosedBox width={36} height={36} />,
    },
    {
      id: 2,
      title: 'Заказ подготовлен - 16 декабря',
      description: 'Ваш заказ подготовлен',
      time: '14:40',
      completed: true,
      icon: () => <DeliveryTruck width={36} height={36} />,
    },
    {
      id: 3,
      title: 'Доставка в процессе - 15 декабря',
      description: 'Ваш подарок в пути',
      time: '11:30',
      completed: false,
      icon: () => <DeliveryReceive width={36} height={36} />,
    },
    {
      id: 4,
      title: 'Доставлен',
      description: 'Желаю вам интересных впечатлений',
      time: '10:04',
      completed: false,
      icon: () => <OpenedBox width={36} height={36} />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Отслеживать заказ"
        style={{
          marginHorizontal: 16,
          backgroundColor: textColors.grey1,
        }}
      />
      <View style={styles.productCard}>
        <ProductCardFullScreenForCompleted openBottomSheet={() => null} />
      </View>

      <View style={styles.deliveryBox}>
        <View style={styles.imageRow}>
          {statuses.map((status, index) => (
            <React.Fragment key={status.id}>
              <StepImage
                IconComponent={status.icon}
                completed={status.completed}
              />
              {index < statuses.length - 1 && (
                <Connector completed={status.completed} />
              )}
            </React.Fragment>
          ))}
        </View>
        <UrbanistBoldText style={styles.statusText}>
          Посылка в процессе Доставки
        </UrbanistBoldText>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.deliveryBox2}>
        <UrbanistBoldText style={styles.heading}>
          Информация о статусе заказа
        </UrbanistBoldText>
        <View style={styles.timeline}>
          {statuses.map((status, index) => (
            <View key={index} style={styles.statusRow}>
              <View
                style={
                  status.completed
                    ? styles.iconContainer
                    : styles.incompletedIconContainer
                }>
                <View
                  style={
                    status.completed
                      ? styles.completedCircle
                      : styles.incompleteCircle
                  }
                />
                {/* {index !== statuses.length - 1 && (
                  <View style={styles.connector}>
                    <View style={styles.dottedLine} />
                  </View>
                )} */}
              </View>
              <View style={styles.textContainer}>
                <View style={styles.statusTimeRow}>
                  <UrbanistBoldText style={styles.statusTitle}>
                    {status.title}
                  </UrbanistBoldText>
                  <UrbanistSemiboldText style={styles.timeText}>
                    {status.time}
                  </UrbanistSemiboldText>
                </View>
                <UrbanistMediumText style={styles.statusDescription}>
                  {status.description}
                </UrbanistMediumText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const StepImage = ({
  IconComponent,
  completed,
}: {
  IconComponent: () => React.JSX.Element;
  completed?: boolean;
}) => {
  return (
    <View style={styles.stepContainer}>
      <View style={[styles.icon, !completed && styles.iconIncomplete]}>
        <IconComponent />
      </View>
      <View style={[styles.dot, completed && styles.completedDot]}>
        <FontAwesome6 name="check" size={10} color={textColors.pureWhite} />
      </View>
    </View>
  );
};

const Connector = ({completed}: {completed?: boolean}) => (
  <View style={styles.connectorRow}>
    <View
      style={[
        styles.connector,
        completed && styles.completedConnector,
        {width: 4},
      ]}
    />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View style={[styles.connector, completed && styles.completedConnector]} />
    <View
      style={[
        styles.connector,
        completed && styles.completedConnector,
        {width: 4},
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: textColors.grey1,
  },
  productCard: {
    marginHorizontal: 16,
    height: 168,
  },
  deliveryBox: {
    marginTop: 24,
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  stepContainer: {
    height: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: textColors.grey6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedDot: {
    backgroundColor: textColors.purple,
  },
  icon: {
    alignItems: 'center',
    width: 36,
    height: 36,
    marginBottom: 8,
  },
  iconIncomplete: {
    opacity: 0.6,
  },
  connectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 20,
  },
  connector: {
    width: 8,
    height: 1,
    borderRadius: 2,
    backgroundColor: textColors.grey6,
    borderStyle: 'solid',
    marginHorizontal: 2,
  },
  completedConnector: {
    backgroundColor: textColors.purple,
    borderStyle: 'solid',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '700',
  },
  divider: {
    width: width - 32,
    height: 2,
    marginVertical: 24,
    backgroundColor: textColors.grey3,
  },
  deliveryBox2: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 24,
  },
  timeline: {
    width: '100%',
    height: 274,
  },
  statusRow: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 40,
    borderColor: textColors.purple,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incompletedIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 40,
    borderColor: textColors.grey6,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: textColors.purple,
    borderColor: textColors.purple,
    borderWidth: 3,
  },
  incompleteCircle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: textColors.grey6,
    borderColor: textColors.grey6,
    borderWidth: 3,
  },
  connector2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedLine: {
    width: 2,
    height: '100%',
    backgroundColor: textColors.grey3,
    borderStyle: 'dashed',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  statusTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  statusDescription: {
    fontSize: 14,
    color: textColors.darkGrey,
    fontWeight: '500',
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '500',
    color: textColors.darkGrey,
  },
});

export default DeliveryProcess;
