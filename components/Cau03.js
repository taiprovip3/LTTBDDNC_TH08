import { View, Text, SafeAreaView, Button, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';

export default function Cau03() {

  const [isStartAnimated, setIsStartAnimated] = useState(false);
  const fadeAnimame = useRef(new Animated.Value(0)).current;

  const startAnime = () => {
      Animated.loop(
        Animated.timing(fadeAnimame, {
            toValue: 220,
            duration: 1000
        })
      ).start();
  }

  const pauseAnime = () => {
      fadeAnimame.stopAnimation();
  }

  const resetAnime = () => {
    fadeAnimame.setValue(0);
  }

  return (
    <SafeAreaView style={{flex:1}}>
      
        <Animated.View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Animated.View style={{ padding: 50, backgroundColor:'red', width:'25%', marginLeft: fadeAnimame }}></Animated.View>
        </Animated.View>

        <View style={{flexDirection: 'row'}}>
            <Button
                title='Start'
                onPress={startAnime}
            />
            <Button
                title='Pause'
                onPress={pauseAnime}
            />
            <Button
                title='Reset'
                onPress={resetAnime}
            />
        </View>

    </SafeAreaView>
  );
}