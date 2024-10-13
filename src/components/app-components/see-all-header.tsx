import {ViewStyle, Pressable, StyleSheet, View, Text} from 'react-native';
import { textColors } from '../../constants/Colors';
import { UrbanistBoldText } from '../StyledText';


export const SeeAllHeader = ({
  headerName,
  link,
  style,
  onPress,
  btnName,
}: {
  headerName: string;
  link?: string;
  style?: ViewStyle;
  onPress: () => void;
  btnName: string;
}) => {
  return (
    <View style={[styles.box, style]}>
      <UrbanistBoldText style={styles.headerName}>
        {headerName}
      </UrbanistBoldText>
      {link?.length ? (
        // <Link href={link as `${string}:${string}`} asChild>
        <Pressable onPress={onPress}>
          <Text style={styles.seeAll}>{btnName}</Text>
        </Pressable>
      ) : (
        <Pressable onPress={onPress}>
          <Text style={styles.seeAll}>{btnName}</Text>
        </Pressable>
      )}
    </View>
  );
};

export const SectionHeader = ({
  headerName,
  style,
}: {
  headerName: string;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.box, style]}>
      <UrbanistBoldText style={styles.headerName}>
        {headerName}
      </UrbanistBoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: 25,
    marginVertical: 15,
  },
  headerName: {
    fontSize: 18,
    fontWeight: '700',
    color: textColors.navyBlack,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '700',
    color: textColors.navyBlack,
  },
});
