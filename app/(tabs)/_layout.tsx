import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Color from '@/constants/Color'

export default function _layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: Color.bgcolor,
                borderTopWidth: 0,
                padding: 0
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: Color.black,
            tabBarInactiveTintColor: '#999'
        }}>
            <Tabs.Screen name='index' options={{
                tabBarIcon: ({ color }) => (

                    <Ionicons name='compass' size={25} color={color} />
                )
            }} />

            <Tabs.Screen name='Categary' options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name='space-dashboard' size={25} color={color} />
                )
            }} />

            <Tabs.Screen name='Search' options={{
                tabBarIcon: ({ color }) => (
         <View style={{
            backgroundColor:Color.primaryColor,
            paddingHorizontal:16,
            paddingVertical:12,
            borderRadius:10,
            height:50
        }}>

     
        <Ionicons name='search-outline' size={25} color={Color.white}/>
        </View>
                )
            }} />

            <Tabs.Screen name='Bookmarks'
                options={{
                    tabBarIcon: ({ color }) => (

                        <Ionicons name='bookmark' size={25} color={color} />
                    )
                }} />

            <Tabs.Screen name='Profile' options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name='user' size={25} color={color} />
                )
            }} />


        </Tabs>
    )
}