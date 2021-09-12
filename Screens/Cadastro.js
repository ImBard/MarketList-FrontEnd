import React, { useState } from 'react';
import { View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../Styles/MainStyle';

export default function Cadastro({navigation}) {

  const [nome, setNome] = useState(null) 
  const [email, setEmail] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [regiao, setRegiao] = useState(null)
  const [password, setPassword] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const validar = () => {
    let error = false
    setErrorNome(null)
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorTelefone(null)
    setErrorPassword(null)
    if (!nome == null) {
        setErrorNome("Preencha o seu nome completo")
        error = true
    }
    if (email == null){
        setErrorEmail("Preencha o E-mail corretamente")
        error = true
    }
    if (cpf == null){
        setErrorCpf("Preencha o CPF corretamente")
        error = true
    }
    if (telefone == null){
        setErrorTelefone("Preencha o Telefone corretamente")
        error = true
    }
    if (password == null){
        setErrorPassword("Preencha sua senha")
        error = true
    }
    return !error
  }

  const criar = () => {
      if(validar()){
          console.log("Conta criada!!!")
        }
    }
//   const [selectedLanguage, setSelectedLanguage] = useState();


  return (
    <View style={styles.container}>
      <Text h1>Cadastre-se</Text>
      
      <Input
        placeholder="Nome"
        onChangeText={value => {
            setNome(value)
            setErrorNome(null)}}
        returnKeyType="done"
        errorMessage={errorNome}
        />

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)}}
        returnKeyType="done"
        errorMessage={errorEmail}
        />

      <Input
        placeholder="CPF"
        keyboardType="numeric"
        onChangeText={value => {
            setCpf(value)
            setErrorCpf(null)}}
        returnKeyType="done"
        errorMessage={errorCpf}
        />

      <Input
        placeholder="Telefone"
        keyboardType="numeric"
        onChangeText={value => {
            setTelefone(value)
            setErrorTelefone(null)}}
        returnKeyType="done"
        errorMessage={errorTelefone}
        />

       {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        </Picker>  */}

      <Input
        placeholder="Sua senha"
        secureTextEntry={true}
        onChangeText={value => {
            setPassword(value)
            setErrorPassword(null)}}
        returnKeyType="done"
        errorMessage={errorPassword}
        />

      <CheckBox 
        title="Aceito os termos de politica e privacidade"
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />

      <Button
        title="Criar"
        buttonStyle={styles.button}
        onPress={() => criar()}
      />

    </View>
  );
}
