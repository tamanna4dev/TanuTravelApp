import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { GroupType } from '@/types/GroupType';
import Color from '@/constants/Color';
import { Ionicons } from '@expo/vector-icons';

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderItem = ({ item }: { item: GroupType }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
    <View>
    <Text style={styles.itemText}>{item.name}</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Ionicons name='star'size={20} color={Color.primaryColor}/>
      <Text style={styles.itemRating}>{item.rating}</Text>
    <Text style={styles.itemReview}>({item.reviews})</Text>
    </View>
    </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} horizontal showsVerticalScrollIndicator={false} />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: Color.black,
    marginBottom: 10
  },

  item: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection:'row',
    alignItems:'center'
  },

  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight:10
  },

 itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.black,
    marginBottom: 8
  },

  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.black,
    marginLeft: 8
  },
  itemReview:{
     
      fontSize: 14,
      color: '#999',
    },
 
});

