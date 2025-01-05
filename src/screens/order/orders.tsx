import React from 'react';
import { CustomHeader } from '@/components/app-components/go-back';
import {textColors} from '@/constants/Colors';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';

// const MaterialTopTabs = createMaterialTopTabNavigator();

// export default function OrdersScreen() {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <CustomHeader title="Заказы" style={{paddingHorizontal: 16}} />
//       <MaterialTopTabs.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: textColors.purple,
//           tabBarInactiveTintColor: textColors.grey6,
//           tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
//           tabBarStyle: styles.tabBarStyle,
//           tabBarLabelStyle: styles.tabBarLabelStyle,
//         }}>
//         <MaterialTopTabs.Screen
//           name="current-orders-screen"
//           options={{tabBarLabel: 'Текущие'}}
//         />
//         <MaterialTopTabs.Screen
//           name="completed-orders-screen"
//           options={{tabBarLabel: 'Завершенные'}}
//         />
//       </MaterialTopTabs.Navigator>
//     </SafeAreaView>
//   );
// }

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CurrentOrders from './current';
import CompletedOrders from './completed';

const Tab = createMaterialTopTabNavigator();

export function OrdersScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={CurrentOrders} />
      <Tab.Screen name="Completed" component={CompletedOrders} />
    </Tab.Navigator>
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
    shadowOpacity: 0,
  },
  tabBarLabelStyle: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'none',
  },
});
