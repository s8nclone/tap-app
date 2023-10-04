import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, addToCart } from '../redux/cartSlice';

const HomePage = () => {
    const product = useSelector((state) => state.cart.product);
    const cartData = useSelector((state) => state.cart.cartData);
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Dispatch the fetchCartData action when the component mounts
        dispatch(fetchCartData());
    }, [dispatch]);
    
    if (loading === 'pending') {
        return <SafeAreaView><Text>Loading...</Text></SafeAreaView>;
    }
    
    if (error) {
        return <SafeAreaView><Text>Error: {error}</Text></SafeAreaView>;
    }

    const handleAddToCart = (item) => {
        // Get the item at the specified index and add it to the cart
        dispatch(addToCart({ product: item, quantity: 1 }));
    };

    console.log(cartData);

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Shop</Text>
            <View style={styles.rightIcons}>
                <TouchableOpacity style={styles.iconBtn}>
                    <FontAwesome5 name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <FontAwesome5 name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView style={styles.itemsContainer} >
            {product.map((item)=> (
                <View key={item.id} style={styles.card}>
                    <Image 
                        source={{ uri: item.image }} 
                        style={styles.productImage}
                    />
                    <View style={styles.detail}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <TouchableOpacity 
                            style={styles.priceBtn}
                            onPress={() => handleAddToCart(item)}
                        >
                            <Text style={styles.cartBtn} >Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    </SafeAreaView>

    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        fontWeight: '600',
    },
    rightIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    itemsContainer: {
    },
    card: {
        margin: 10,
        height: 150,
        width: '90%',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#f4f4f4'
    },
    productImage: {
        width: 75,
        height: 75,
        width: '20%'
    },
    detail: {
        flexDirection: 'column',
        width: '70%',
        gap: 5
    },
    title: {
        fontSize: 15,
        fontWeight: '400'
    },
    price: {
        fontSize: 15,
    },
    priceBtn: {
        backgroundColor: '#000',
        borderRadius: 10,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartBtn: {
        color: '#fff',
    }

})