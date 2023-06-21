import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductList = ({ productData }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: productData.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{productData.title}</Text>
        <Text style={styles.price}>Price: ${productData.price}</Text>
        <Text style={styles.category}>Category: {productData.category}</Text>
        <Text style={styles.description}>{productData.description}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>Rating: {productData.rating.rate}</Text>
          <Text style={styles.ratingCount}>({productData.rating.count} reviews)</Text>
        </View>
      </View>
    </View>
  );
};

const defaultTextStyle = {
  color: 'black',
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#b8b6b6',
    marginBottom:10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  title: {
    ...defaultTextStyle,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    ...defaultTextStyle,
    fontSize: 16,
    marginBottom: 4,
  },
  category: {
    ...defaultTextStyle,
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    ...defaultTextStyle,
    fontSize: 16,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...defaultTextStyle,
    fontSize: 16,
    marginRight: 4,
  },
  ratingCount: {
    ...defaultTextStyle,
    fontSize: 16,
  },
});

export default React.memo(ProductList);
