import React from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.header}>Sign In</Text>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="mail@email.com"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('HomePage', {name: "HomePage"})
                    }
                    style={[styles.signBtn, styles.input]}
                >
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header:{
        fontSize : 40,
        fontWeight: "500"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%"
    },
    input: {
        borderWidth: 1.2,
        borderColor: "#ccc",
        width: "100%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    signBtn: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    }

})

export default LoginPage