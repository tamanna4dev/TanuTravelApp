import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import Color from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { useHeaderHeight } from '@react-navigation/elements'
import { TextInput } from 'react-native-gesture-handler'
import CategaryButton from './../../components/CategaryButton'
import listingData from '@/data/destinationn.json' 
import GroupListings from '@/components/GroupListings'
import groupData from '@/data/groups.json'
import Listings from '@/components/Listings'

// Example Image Data (could be replaced with dynamic data)
const imageData = {
  uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  description: "This is a sample image of a beautiful landscape with a wonderful view. Perfect for your next trip!"
};

const notificationData = [
  { id: 1, message: "Your booking is confirmed!" },
  { id: 2, message: "New destinations have been added!" },
  { id: 3, message: "Check out our latest group tours!" }
];

type Props = {
    onCategoryChanged: (category: string) => void;
}

const Page = ({ onCategoryChanged }: Props) => {
    const headerHeight = useHeaderHeight()
    const [category, setCategory] = useState('All')
    const [showNotifications, setShowNotifications] = useState(false) // For notifications
    const [showImageData, setShowImageData] = useState(false) // For image data modal
    const [currentImageData, setCurrentImageData] = useState(null) // Store clicked image data

    const onCatChanged = (category: string) => {
        console.log("Category", category);
        setCategory(category)
    }

    // Toggle the notification panel
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    }

    // Toggle the image data modal
    const toggleImageDataModal = (image) => {
        setCurrentImageData(image);
        setShowImageData(!showImageData);
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity 
                            onPress={() => toggleImageDataModal(imageData)}  // Show image data when clicked
                            style={{ marginLeft: 20 }}
                        >
                            <Image
                                source={{ uri: imageData.uri }}
                                style={{ width: 40, height: 40, borderRadius: 10 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={toggleNotifications}  // Toggle notifications on click
                            style={{
                                marginRight: 20,
                                backgroundColor: Color.white,
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: '#171717',
                                shadowOffset: { width: 2, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}
                        >
                            <Ionicons name='notifications' size={20} color={Color.black} />
                        </TouchableOpacity>
                    )
                }}
            />

            <View style={[styles.Container, { paddingTop: headerHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTxt}>Explore The Beautiful Wonderful</Text>

                    <View style={styles.searchSectionWrapper}>
                        <View style={styles.searchBar}>
                            <Ionicons name='search' size={18} style={{ marginRight: 5 }} color={Color.black} />
                            <TextInput placeholder='Search...' />
                        </View>
                        <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>
                            <Ionicons name='options' size={28} color={Color.white} />
                        </TouchableOpacity>
                    </View>

                    <CategaryButton onCategoryChanged={onCatChanged} />
                    <Listings listings={listingData} Category={category} />
                    <GroupListings listings={groupData} />
                </ScrollView>
            </View>

            {/* Modal for notifications */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showNotifications}
                onRequestClose={toggleNotifications}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Notifications</Text>

                        {/* Display the notification list */}
                        {notificationData.map((notification) => (
                            <Text key={notification.id} style={styles.notificationText}>
                                {notification.message}
                            </Text>
                        ))}

                        {/* Close button */}
                        <TouchableOpacity onPress={toggleNotifications} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal for image data */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showImageData}
                onRequestClose={() => setShowImageData(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image 
                            source={{ uri: currentImageData?.uri }} 
                            style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
                        />
                        <Text style={styles.modalTitle}>Image Description</Text>
                        <Text style={styles.notificationText}>{currentImageData?.description}</Text>

                        {/* Close button */}
                        <TouchableOpacity onPress={() => setShowImageData(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Color.bgcolor,
    },
    headerTxt: {
        fontSize: 28,
        fontWeight: '800',
        color: Color.black,
        marginTop: 10
    },
    searchSectionWrapper: {
        flexDirection: 'row',
        marginVertical: 20
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Color.white,
        padding: 16,
        borderRadius: 10
    },
    filterBtn: {
        backgroundColor: Color.primaryColor,
        padding: 12,
        borderRadius: 10,
        marginLeft: 20
    },
    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: Color.white,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notificationText: {
        fontSize: 16,
        marginVertical: 5,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: Color.primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: Color.white,
        fontWeight: 'bold',
    },
})
