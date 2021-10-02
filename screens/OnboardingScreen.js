import React from "react";
import Onboarding from 'react-native-onboarding-swiper';

import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
//components
const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return(
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}
const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:8}} 
        >
        <Text style={{fontSize: 16}}>Skip</Text>
    </TouchableOpacity>
);
const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:8}} 
        {...props}>
        <Text style={{fontSize: 16}}>Next</Text>
    </TouchableOpacity>
);
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:8}} 
        {...props}>
        <Text style={{fontSize: 16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent ={Skip}
        NextButtonComponent ={Next}
        DoneButtonComponent ={Done}
        DotComponent ={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
         pages={[
         {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
         },
         {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Share Your Favourites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
        },
         ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OnboardingScreen;