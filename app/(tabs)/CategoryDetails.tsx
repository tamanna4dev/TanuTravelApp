import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const CategoryDetailsScreen = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details for {category}</Text>
      <Text>Here you can add details about the category: {category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CategoryDetailsScreen;
