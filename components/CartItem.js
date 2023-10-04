import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';

function CartItem({item}) {
    const dispatch = useDispatch();

  return (
    <View style={styles.card}>
        <Image 
            source={{ uri: item.image }} 
            style={styles.productImage}
        />
        <View style={styles.detail}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity 
                style={styles.priceBtn}
                onPress={()=>{dispatch(removeItemFromCart(item))}}
            >
                <Text style={styles.cartBtn} >remove</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

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

export default CartItem