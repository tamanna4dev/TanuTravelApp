import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Sample category data
const categories = [
  { id: '1', name: 'Adventure', image: require('../../assets/images/1.jpg') },
  { id: '2', name: 'Beach', image: require('../../assets/images/2.jpeg') },
  { id: '3', name: 'City Tours', image: require('../../assets/images/3.jpg') },
  { id: '4', name: 'Cultural', image: require('../../assets/images/1.jpg') },
  { id: '5', name: 'Nature', image: require('../../assets/images/5.jpg') },
];

const CategoryCard = ({ name, image,  }) => (
  <Link href='/(tabs)categoryDetails' style={styles.card}>
    <Image source={image} style={styles.image} />
    <Text style={styles.cardText}>{name}</Text>
  </Link>
);

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Categories</Text>

      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            image={item.image}
            href={`/category-details?category=${item.name}`} // Passing the category name in query params
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default CategoryScreen;
