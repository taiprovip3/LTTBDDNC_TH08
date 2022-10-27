import { View, Text, SafeAreaView, Button, Animated, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState, useEffect } from 'react';
import snackIcon from '../assets/snack-icon.png';

export default function Cau04() {

  const myFirstAnimation = useRef(new Animated.Value(0)).current;
  const mySecondAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      Animated.sequence([
        Animated.timing(myFirstAnimation, {
            toValue: 1,
            duration: 2000
        }),
        Animated.timing(mySecondAnimation, {
            toValue: 150,
            duration: 1500
        })
      ]).start();
  }, [myFirstAnimation, mySecondAnimation]);

  return (
    <SafeAreaView style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
      
        <Animated.View style={{ opacity: myFirstAnimation }}>
            <Image source={snackIcon} style={{ width:64, height:64 }} />
        </Animated.View>
        <Animated.View style={{ marginLeft: mySecondAnimation }}>
            <Text>Welcome to ReactNative animated, Phan Tấn Tài</Text>
        </Animated.View>

    </SafeAreaView>
  );
}