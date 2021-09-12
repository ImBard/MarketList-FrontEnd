import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import styles from '../Styles/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={styles.container}>
      <Text h1>Market List</Text>
      
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        keyboardType="email-address"
        onChangeText={value => setEmail(value)}
        />

      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        />

      <Button
        title="Entrar"
        onPress={() => entrar()}
      />

    </View>
  );
}
