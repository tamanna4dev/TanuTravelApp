import { Dimensions, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listingType } from '@/types/listingType';
import listingData from '@/data/destinationn.json'

import Color from '@/constants/Color';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';



const { width } = Dimensions.get('window')
const IMG_HEIGHT = 300

const ListingDetails = () => {
  const { id } = useLocalSearchParams()
  const listing: listingType = (listingData as listingType[]).find(
    (item) => item.id === id
  )

  const router = useRouter()
  return (
    <>
      {/* <Image source={{ uri: listing?.image }} style={styles.image} /> */}
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 4,
              borderRadius: 10,
              marginLeft: 15
            }}>
            <View style={{
              backgroundColor: Color.white,
              padding: 6,
              borderRadius: 10,
            }}>
              <Feather name="arrow-left" size={20} />
            </View>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 4,
              borderRadius: 10,
              marginRight: 15
            }}>
            <View style={{
              backgroundColor: Color.white,
              padding: 6,
              borderRadius: 10,
            }}>
              <Ionicons name="bookmark-outline" size={20} />
            </View>
          </TouchableOpacity>
        )
      }} />

      <View style={styles.Container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5 name="map-marker-alt" size={18} Color={Color.primaryColor} />
            <Text style={styles.listingLocationTxt}>{listing.location}</Text>
          </View>

          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlightIcon}>
                <Ionicons name='time' size={18} color={Color.primaryColor} />
              </View>

              <View>
              <Text style={styles.highlightText}>Duration</Text>
              <Text style={styles.highlightvalue}>{listing.duration} Days</Text> 
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlightIcon}>
                <FontAwesome name='users' size={18} color={Color.primaryColor} />
              </View>

              <View>
              <Text style={styles.highlightText}>Person</Text>
              <Text style={styles.highlightvalue}>{listing.duration}</Text> 
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlightIcon}>
                <Ionicons name='star' size={18} color={Color.primaryColor} />
              </View>

              <View>
              <Text style={styles.highlightText}>Rating</Text>
              <Text style={styles.highlightvalue}>{listing.rating} Days</Text> 
              </View>
            </View>
          </View>

<Text style={styles.listingDetails}>{listing.description}</Text>


        </View>
      </View>

<View style={styles.footer}>
  <TouchableOpacity onPress={()=>{}} style={[styles.footerBtn, styles.footerBookBtn]}>
    <Text style={styles.footerBtnTxt}>Book Now</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>{}} style={styles.footerBtn}>
    <Text style={styles.footerBtnTxt}>${listing.price}</Text>
  </TouchableOpacity>
</View>
 </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT
  },
  Container: {
    flex: 1,
    backgroundColor: Color.white
  },
  contentWrapper: {
    padding: 20
  },
  listingName: {
    fontSize: 24,
    fontWeight: '500',
    color: Color.black,
    letterSpacing: 0.5
  },
  listingLocationWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: Color.black
  },
  highlightWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
justifyContent:'space-between'
  },
  highlightIcon: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center'
  },
  highlightText: {
    fontSize: 12,
    color: '#999'
  },
  highlightvalue: {
    fontSize: 12,
    fontWeight: '600'
  },
  listingDetails:{
    fontSize: 16,
    color: Color.black,
    letterSpacing: 0.5  ,
    lineHeight:25
  },
  footer:{
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    padding:20,
    paddingBottom:30,
    width:width
  },
  footerBtn:{
    flex:1,
    backgroundColor: Color.black,
    padding:20,
    borderRadius:10,
    alignItems:'center'
  },

footerBookBtn:{
  flex:2,
  backgroundColor:Color.primaryColor,
  marginRight:20
}
,
  footerBtnTxt:{
color:Color.white,
fontSize:16,
fontWeight:'600',
textTransform:'uppercase'
  }
})



