import { Image, Pressable, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Text, View,  } from '@/src/components/Themed';
import { Link } from 'expo-router';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
      <Link href={"/product"} asChild>
        <Pressable style={styles.container}>
          <Image 
          source={{ uri: product.image || defaultPizzaImage }} 
          style={styles.image}
          resizeMode='contain'
          />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </Pressable>
      </Link>
    );
  };

    export default ProductListItem;

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      marginHorizontal: 10,
      backgroundColor: '#f0ffff',
      padding: 10,
      borderRadius: 20,
      flex: 1,
      maxWidth: '50%'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10
    },
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold'
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    }
  });