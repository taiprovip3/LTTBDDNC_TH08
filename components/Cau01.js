import { View, Text, Animated, SafeAreaView  } from 'react-native';
import React, { useRef, useEffect } from 'react';

export default function Cau01() {
  useEffect(() => {
    Animated.timing(fadeAnimame, {
      toValue: 1,
      duration: 2000
    }).start();
  }, [fadeAnimame]);

  const fadeAnimame = useRef(new Animated.Value(0)).current;
  console.log('fadeAnime = ', fadeAnimame);


  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Animated.View style={{ opacity: fadeAnimame }}>
            <Text>Welcome to Animation ReactNative</Text>
        </Animated.View>
    </SafeAreaView >
  );
}