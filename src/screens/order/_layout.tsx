import {CustomHeader} from '@/components/app-components/go-back';
import {textColors} from '@/constants/Colors';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import {TabNavigationState, ParamListBase} from '@react-navigation/native';
import {withLayoutContext} from 'expo-router';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Заказы" style={{paddingHorizontal: 16}} />
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: textColors.purple,
          tabBarInactiveTintColor: textColors.grey6,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}>
        <MaterialTopTabs.Screen
          name="current"
          options={{tabBarLabel: 'Текущие'}}
        />
        <MaterialTopTabs.Screen
          name="completed"
          options={{tabBarLabel: 'Завершенные'}}
        />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: textColors.purple,
    width: 184,
    height: 4,
    borderRadius: 4,
    marginLeft: Dimensions.get('screen').width / 2 / 2 - 92,
  },
  tabBarStyle: {
    // backgroundColor: textColors.grey1,
    shadowOpacity: 0,
  },
  tabBarLabelStyle: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'none',
  },
});
