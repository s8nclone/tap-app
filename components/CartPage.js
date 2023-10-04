import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; 
import CartItem from './CartItem'; 
import { SafeAreaView } from 'react-native-safe-area-context';


function CartPage() {
  const cart = useSelector((state) => state.cart.cartData); 

  function getCartTotal() {
    const totalCost = cart.reduce((prev, curr) => {
      const itemPrice = Number(curr.product.price);

      // Check for valid numerical values
      if (isNaN(itemPrice)) {
        return prev;
      }

      return prev + itemPrice;
    }, 0);

    return totalCost.toFixed(2); // Format total cost with 2 decimal places
  }

  function renderEmptyCart() {
    return (
      <Text style={styles.emptyCart}>You have no items in your cart</Text>
    );
  }

  const renderCart = () => {
    return (
      <View>
          {cart.map((item)=>{
            return <CartItem item={item.product}/>
          })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Cart</Text>
        <ScrollView style={styles.itemsContainer}>
          <View>{cart && cart.length > 0 ? renderCart() : renderEmptyCart()}</View>
          <View style={styles.totalBox}>{cart && cart.length > 0 
            ? (<Text style={styles.total}>Total: ${getCartTotal()}</Text>) 
            : null}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalBox: {
        alignItems: 'flex-end',
        paddingRight: 10
    },
    total: {
        borderTopWidth: 2,
        borderTopColor: '#f4f4f4',
        fontSize: 25,
        color: 'red',
    },
    emptyCart: {
        fontSize: 20
    },
    headerText: {
        fontSize: 30,
        fontWeight: '600',
        paddingHorizontal: 10
    },
})

export default CartPage