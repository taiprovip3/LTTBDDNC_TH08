import { View, Button } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <View>
        <Button
          title='Cau01'
          onPress={() => navigation.navigate('Cau01')}
        />
        <Button
          title='Cau02'
          onPress={() => navigation.navigate('Cau02')}
        />
        <Button
          title='Cau03'
          onPress={() => navigation.navigate('Cau03')}
        />
        <Button
          title='Cau04'
          onPress={() => navigation.navigate('Cau04')}
        />
        <Button
          title='Cau05'
          onPress={() => navigation.navigate('Cau05')}
        />
        <Button
          title='Cau06'
          onPress={() => navigation.navigate('Cau06')}
        />
        <Button
          title='Cau07'
          onPress={() => navigation.navigate('Cau07')}
        />
    </View>
  );
}