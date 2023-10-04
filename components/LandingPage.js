import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";

const LandingPage = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" translucent={true}/>
            <FontAwesome5 name="shopping-cart" size={150} color= "black" style={styles.logo}/>
            <Text style={styles.heroText}>The only shopping app you need</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('LoginPage', {name: "LoginPage"})
                  }
                style={styles.signBtn}
            >
                <Text style={styles.buttonText}>Sign in with email</Text>
            </TouchableOpacity> 
            <View style={styles.flexContainer}>
                <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    title="Apple ID"
                    onPress={()=>{}}
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>Apple ID</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.buttonText, {paddingHorizontal: 10}]}>By Continuing you agree to the Terms and Conditions</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    logo: {
        marginTop: 70,
        transform: [{skewY: "-10deg"}]
    },
    heroText: {
        color: "#000",
        fontSize: 60,
        fontWeight: "600",
        padding: 10
    },
    signBtn: {
        // marginVertical: 5,
        borderRadius: 30,
        width: "90%",
        marginHorizontal: 10,
        backgroundColor: "#000",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },
    flexContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 5
    },
    loginBtn: {
        borderRadius: 30,
        marginVertical: 5,
        borderColor: "#000",
        borderWidth: 1.2 ,
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        color: "#000",
        textAlign: "center",
        width: 150,
        height: 40,
        marginTop: 6,
        fontSize: 20,
        fontWeight:'700'
    }
})

export default LandingPage

