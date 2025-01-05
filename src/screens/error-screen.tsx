import {FlashList} from '@shopify/flash-list';
import {StyleSheet} from 'react-native';
import {EmptySvg} from '../assets/images/empty';
import {CustomHeader} from '../components/app-components/go-back';
import {ProductCard} from '../components/app-components/product-card';
import {UrbanistBoldText} from '../components/StyledText';
import {IProduct} from '../constants/data';
import {SafeAreaView} from '../components/Themed';

export default function WishlistScreen() {
  return data.length > 0 ? (
    <SafeAreaView style={styles.flatlistStyleView}>
      <CustomHeader title="Мои желания" style={{marginHorizontal: 16}} />
      <FlashList
        data={data}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 8}}
        renderItem={({item}) => <ProductCard key={item.id} product={item} />}
        keyExtractor={item => item.id}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Мои желания" />
      <EmptySvg width={250} height={244} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlistStyleView: {
    flex: 1,
  },
  emptyTxt: {
    marginTop: 40,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
  },
});
