import {EmptySvg} from '@/assets/images/empty';
import {ProductCardFullScreenForCurrent} from '@/components/app-components/product-card-full-screen copy';
import {UrbanistBoldText, UrbanistMediumText} from '@/components/StyledText';
import {textColors} from '@/constants/Colors';
import {FlatList, StyleSheet, View} from 'react-native';

const data = ['1', '2', '3', '4', '5', '6'];

export default function CurrentOrders() {
  return data.length > 0 ? (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        style={{backgroundColor: textColors.grey1}}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => <ProductCardFullScreenForCurrent key={item} />}
        keyExtractor={item => item}
        // estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <EmptySvg width={250} height={244} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
      <UrbanistMediumText style={styles.emptySmallTxt}>
        В данный момент у вас нет текущих заказов
      </UrbanistMediumText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: textColors.grey1,
  },
  emptyTxt: {
    marginTop: 40,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
  },
  emptySmallTxt: {
    fontSize: 18,
    fontWeight: '400',
    color: textColors.grey3,
  },
});
