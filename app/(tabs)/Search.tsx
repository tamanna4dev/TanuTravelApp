import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Sample search result data
const sampleResults = [
  { id: '1', name: 'Bali', description: 'A beautiful island in Indonesia', image: require('../../assets/images/11.jpg') },
  { id: '2', name: 'Paris', description: 'The City of Lights', image: require('../../assets/images/12.jpg') },
  { id: '3', name: 'New York', description: 'The city that never sleeps', image: require('../../assets/images/13.jpeg') },
  { id: '4', name: 'Tokyo', description: 'A vibrant metropolis in Japan', image: require('../../assets/images/14.jpeg') },
  { id: '5', name: 'Sydney', description: 'Home to the famous Opera House', image: require('../../assets/images/15.jpg') },
  { id: '6', name: 'London', description: 'The capital of the UK, full of history', image: require('../../assets/images/16.jpeg') },
  { id: '7', name: 'Rome', description: 'An ancient city with a rich heritage', image: require('../../assets/images/17.jpg') },
  { id: '8', name: 'Cape Town', description: 'A stunning coastal city in South Africa', image: require('../../assets/images/18.jpeg') },
  { id: '9', name: 'Santorini', description: 'A picturesque island in Greece', image: require('../../assets/images/19.jpeg') },
  { id: '10', name: 'Dubai', description: 'A modern city with amazing skyscrapers', image: require('../../assets/images/20.jpg') },
  // Add more places as needed...
];

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(sampleResults);

  const handleSearch = (text) => {
    setQuery(text);
    // Implement search logic to filter `sampleResults` based on `text`
    const filteredResults = sampleResults.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search destinations, attractions..."
        value={query}
        onChangeText={handleSearch}
      />

      {/* Search Results */}
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PlaceDetails', { place: item })}
              style={styles.resultCard}
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.resultText}>
                <Text style={styles.resultName}>{item.name}</Text>
                <Text style={styles.resultDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No results found for "{query}"</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 20,
    fontSize: 16,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  resultText: {
    flex: 1,
    padding: 10,
  },
  resultName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: '#999',
  },
});

export default SearchScreen;
