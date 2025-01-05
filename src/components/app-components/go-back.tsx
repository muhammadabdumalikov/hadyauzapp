import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ViewProps} from '../Themed';
import {textColors} from '@/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

const {width} = Dimensions.get('screen');

export const GoBackButtonAbsolute = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[
        styles.goBackButton,
        {
          position: 'absolute',
          zIndex: 3,
          top: 48,
          left: 5,
          padding: 10,
        },
      ]}
      onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={28} color="black" />
    </Pressable>
  );
};

export const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={28} color="black" />
    </Pressable>
  );
};

export const CustomHeader = (props: ViewProps & {title: string}) => {
  return (
    <BlurView
      style={{backgroundColor: textColors.backgroundBlur}}
      blurAmount={20}
      blurType="light">
      <View style={[styles.headerContainer, props?.style]}>
        <GoBackButton />
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: width - 32,
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: textColors.pureWhite,
    // borderBottomWidth: 1,
    // borderBottomColor: '#EDEDED',
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
