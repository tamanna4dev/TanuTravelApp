import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Sample bookmark data
const initialBookmarks = [
  { id: '1', name: 'Bali Beach', description: 'A serene beach in Indonesia', image: require('../../assets/images/21.jpg') },
  { id: '2', name: 'Eiffel Tower', description: 'Famous landmark in Paris', image: require('../../assets/images/11.jpg') },
  { id: '3', name: 'Great Wall of China', description: 'An ancient wonder in China', image: require('../../assets/images/22.jpeg') },
  { id: '4', name: 'Machu Picchu', description: 'Inca citadel in Peru', image: require('../../assets/images/23.jpeg') },
  { id: '5', name: 'Grand Canyon', description: 'Majestic canyon in Arizona, USA', image: require('../../assets/images/24.jpeg') },
  { id: '6', name: 'Santorini', description: 'Beautiful island in Greece', image: require('../../assets/images/25.jpeg') },
  { id: '7', name: 'Sydney Opera House', description: 'Famous landmark in Sydney, Australia', image: require('../../assets/images/7.jpeg') },
  { id: '8', name: 'Mount Fuji', description: 'Iconic mountain in Japan', image: require('../../assets/images/26.jpeg') },
  { id: '9', name: 'Niagara Falls', description: 'Stunning waterfall on the US-Canada border', image: require('../../assets/images/27.jpeg') },
  { id: '10', name: 'Colosseum', description: 'Ancient Roman amphitheater in Italy', image: require('../../assets/images/17.jpg') },
  // Add more bookmarks here...
];

const BookmarkCard = ({ name, description, image, onRemove }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const BookmarksScreen = () => {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const handleRemove = (id) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Bookmarks</Text>
      
      {bookmarks.length > 0 ? (
        <FlatList
          data={bookmarks}
          renderItem={({ item }) => (
            <BookmarkCard 
              name={item.name} 
              description={item.description} 
              image={item.image}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No bookmarks yet. Start exploring and save your favorite places!</Text>
        </View>
      )}
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
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default BookmarksScreen;
