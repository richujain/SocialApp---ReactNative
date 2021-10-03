import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const LoginScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Login Screen</Text>
            <Button
                title="Login Screen"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen;