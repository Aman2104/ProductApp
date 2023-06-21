import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductList from './ProductList';

const ProductScreen = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seachItem, setSeachItem] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProductData(data);
      setFilteredData(data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  const renderProductList = ({ item }) => <ProductList productData={item} />;

  const handleSearch = (text) => {
    setSeachItem(text);
  };

  const handleSearchButton = () => {
    const filteredProducts = productData.filter((item) =>
      item.title.toLowerCase().includes(seachItem.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product Screen</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor='black'
            value={seachItem}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator style={styles.loader} size="large" color="#007AFF" />
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderProductList}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </View>
  );
};

const defaultTextStyle = {
  color: 'black',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight:'100%',
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomColor:'#b6b6b6',
    borderBottomWidth:1,
  },
  headerText: {
    color:'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#b6b6b6',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    color:'#000',
    borderColor:'#b6b6b6',
    borderWidth:0.5,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  searchButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#0274f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    ...defaultTextStyle,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default ProductScreen;
