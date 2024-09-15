import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Color from '@/constants/Color'
import destinationCategories from '@/data/Categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = ({ onCategoryChanged }) => {
  const scrollRef = useRef(null)
  const itemRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index) => {
    const selected = itemRef.current[index]
    setActiveIndex(index)
    console.log(index, 'checking');

    selected?.measure((x) => {
      scrollRef.current.scrollTo({ x: x, y: 0, animated: true })
    })
    onCategoryChanged(destinationCategories[index].title)
  }

  return (
    <View>
      <Text style={styles.Title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el}
            onPress={() => handleSelectCategory(index)}
            style={activeIndex == index ? styles.cregoryBtnActive : styles.CategoryBtn}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={20}
              color={activeIndex == index ? Color.white : Color.black}
            />
            <Text style={activeIndex == index ? styles.cregoryBtnTxtActive : styles.cregoryBtnTxt}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: Color.black
  },
  CategoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  cregoryBtnActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  cregoryBtnTxt: {
    marginLeft: 5,
    color: Color.black
  },
  cregoryBtnTxtActive: {
    marginLeft: 5,
    color: Color.white
  }
})
