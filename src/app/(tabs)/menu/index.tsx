import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import {  View, } from '@/src/components/Themed';
import { FlatList } from 'react-native';

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]}/>
      <ProductListItem product={products[3]}/> */}
      <FlatList 
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} /> }
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
      />
    </View>
  );
}
