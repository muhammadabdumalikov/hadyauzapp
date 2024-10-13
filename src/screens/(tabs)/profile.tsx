
import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/Ionicons';
import {ONBOARDING_KEY} from '../onboarding-screens';
import {MyRefType} from '../search-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistMediumText, UrbanistSemiboldText, UrbanistBoldText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { removeData } from '@/storage/store';

const profileData = [
  {
    icon: <Ionicons name="person-outline" size={24} color="black" />,
    label: 'Редактировать профиль',
    screen: 'screens/edit-profile-screen',
  },
  {
    icon: <SimpleLineIcons name="location-pin" size={24} color="black" />,
    label: 'Адрес доставки',
    screen: 'screens/adresses-screen',
  },
  {
    icon: <Ionicons name="bag-handle-outline" size={24} color="black" />,
    label: 'Заказы',
    screen: 'screens/order',
  },
  {
    icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    label: 'Уведомление',
    screen: 'screens/notification-settings-screen',
  },
  {
    icon: <Ionicons name="card-outline" size={24} color="black" />,
    label: 'Способы оплаты',
    screen: 'screens/payment-methods-screen',
  },
  {
    icon: <Ionicons name="shield-outline" size={24} color="black" />,
    label: 'Безопасность',
    screen: 'screens/security-screen',
  },
  {
    icon: <Ionicons name="language-outline" size={24} color="black" />,
    label: 'Язык',
    value: 'Русский (RU)',
    screen: 'screens/adresses-screen',
  },
  {
    icon: <Ionicons name="moon-outline" size={24} color="black" />,
    label: 'Темный режим',
    switch: true,
  },
  {
    icon: <Ionicons name="lock-closed-outline" size={24} color="black" />,
    label: 'политика конфиденциальности',
    screen: 'screens/adresses-screen',
  },
  {
    icon: <Ionicons name="help-circle-outline" size={24} color="black" />,
    label: 'Справочный центр',
    screen: 'screens/adresses-screen',
  },
  {
    icon: <Ionicons name="people-outline" size={24} color="black" />,
    label: 'Приглашайте друзей',
    screen: 'screens/adresses-screen',
  },
  {
    icon: (
      <Ionicons name="exit-outline" size={24} color={textColors.redVelvet} />
    ),
    label: 'Выйти',
    exit: true,
  },
];

export default function ProfileScreen({navigation}) {
  const [darkMode, setDarkMode] = React.useState(false);
  const refRBSheet = useRef<MyRefType>(null);

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const handleSwitchChange = () => setDarkMode(prev => !prev);

  const renderItem = ({item}: {item: any}) => {
    if (item?.switch) {
      return (
        <View style={styles.optionRow}>
          {item.icon}
          <UrbanistMediumText style={styles.optionText}>
            {item.label}
          </UrbanistMediumText>
          <UrbanistSemiboldText style={styles.optionValue}>
            {item.value}
          </UrbanistSemiboldText>

          <Switch
            activeColor={textColors.purple}
            inActiveColor={textColors.grey2}
            handleOnChange={handleSwitchChange}
          />
        </View>
      );
    } else if (item?.screen) {
      return (
        <Pressable style={styles.optionRow}>
          {item.icon}
          <UrbanistMediumText style={styles.optionText}>
            {item.label}
          </UrbanistMediumText>
          <FontAwesome name="angle-right" size={28} color="black" />
        </Pressable>
      );
    } else {
      return (
        <Pressable style={styles.exitOptionRow} onPress={openBottomSheet}>
          {item.icon}
          <UrbanistSemiboldText style={styles.exitOptionText}>
            {item.label}
          </UrbanistSemiboldText>
        </Pressable>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerText}>Кабинет</UrbanistBoldText>
        <Pressable style={styles.headerRight}>
          <Ionicons name="ellipsis-horizontal-circle" size={28} color="black" />
        </Pressable>
      </View>

      <FlatList
        ListHeaderComponent={
          <View style={styles.profileContainer}>
            <View>
              <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={styles.profileImage}
              />
              {/* <Link href="screens/welcome-screen" asChild> */}
              <Pressable style={styles.editIconBox}>
                <View style={styles.editIcon}>
                  <FontAwesome name="pencil" size={18} color="white" />
                </View>
              </Pressable>
            </View>
            <UrbanistBoldText style={styles.profileName}>
              Аббос Хазратов
            </UrbanistBoldText>
            <UrbanistSemiboldText style={styles.profilePhone}>
              +998 94 678 97 58
            </UrbanistSemiboldText>
          </View>
        }
        data={profileData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.label}
        contentContainerStyle={styles.listContainer}
      />

      <RBSheet
        ref={refRBSheet}
        height={280}
        openDuration={300}
        draggable
        dragOnContent
        customStyles={{
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            gap: 15,
            paddingBottom: 48,
            paddingHorizontal: 16,
          },
        }}>
        <UrbanistBoldText style={styles.title}>Выйти</UrbanistBoldText>
        <UrbanistBoldText style={styles.titleDescription}>
          Вы уверены, что хотите выйти из системы?
        </UrbanistBoldText>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.resetButton}>
            <Text style={styles.resetText}>Отменить</Text>
          </Pressable>
          <Pressable
            style={{flex: 1}}
            onPress={async () => {
              await removeData(ONBOARDING_KEY);
              refRBSheet.current?.close();
              setTimeout(() => {
                navigation.replace('screens/enter-phone-login.screen');
              }, 1000);
            }}>
            <LinearWrapper style={styles.applyButton}>
              <Text style={styles.applyText}>Да, выйти</Text>
            </LinearWrapper>
          </Pressable>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 12,
  },
  headerRight: {
    padding: 4,
  },
  headerText: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
    overflow: 'hidden',
  },
  editIconBox: {
    padding: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIcon: {
    height: 26,
    width: 26,
    backgroundColor: textColors.purple,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    letterSpacing: 0.2,
  },
  profilePhone: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '600',
    letterSpacing: 0.2,
    marginTop: 5,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontWeight: '400',
    letterSpacing: 0.2,
    fontSize: 18,
  },
  optionValue: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: '600',
    color: textColors.navyBlack,
  },
  exitOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  exitOptionText: {
    flex: 1,
    color: textColors.redVelvet,
    marginLeft: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: textColors.redVelvet,
    alignSelf: 'center',
    letterSpacing: 0.5,
  },
  titleDescription: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 0.5,
    marginBottom: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  resetButton: {
    flex: 1,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.grey5,
    borderRadius: 30,
    marginRight: 10,
  },
  resetText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  applyButton: {
    flex: 1,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  applyText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
