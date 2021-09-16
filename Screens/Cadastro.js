import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View} from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../Styles/MainStyle';
import { TextInputMask } from 'react-native-masked-text';
import { ScrollView } from 'react-native-gesture-handler';
import userService from '../Services/UserService';

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
  const [isLoading, setLoading] = useState(false)
  let cpfField = null
  let telefoneField = null

  const validar = () => {
    let error = false
    setErrorNome(null)
    setErrorEmail(null)
    setErrorCpf(null)
    setErrorTelefone(null)
    setErrorPassword(null)
    if (nome == null) {
        setErrorNome("Preencha o seu nome completo")
        error = true
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        setErrorEmail("Preencha o E-mail corretamente")
        error = true
    }
    if (!cpfField.isValid()){
        setErrorCpf("Preencha seu CPF corretamente")
        error = true
    }
    if (!telefoneField.isValid()){
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
          setLoading(true)

          let data = {
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            password: password
          }
          userService.Cadastrar(data)
          .then((response) => {
            setLoading(false)
            console.log(response.data)
          })
          .catch((error) => {
            setLoading(false)
            console.log(error)
            console.log("Deu erro!!!")
          })

        }
    }
//   const [selectedLanguage, setSelectedLanguage] = useState();


  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
    keyboardVerticalOffset={80}
    >
      <ScrollView style={styles.scrollView}>  
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

      <View style={styles.containerMask}>
        <TextInputMask 
        placeholder="CPF"
        type="cpf"
        value={cpf}
        onChangeText={value => {
          setCpf(value)
          setErrorCpf(null)
        }}
        keyboardType="numeric"
        returnKeyType="done"
        style={styles.maskedInput}
        ref={(ref) => cpfField = ref}
      />
      </View>
      <Text style={styles.errorMessage}>{errorCpf}</Text>

      <View style={styles.containerMask}>
        <TextInputMask 
        placeholder="Telefone"
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={telefone}
        onChangeText={value => {
          setTelefone(value)
          setErrorTelefone(null)
        }}
        keyboardType="numeric"
        returnKeyType="done"
        style={styles.maskedInput}
        ref={(ref) => telefoneField = ref}
      />
      </View>
      <Text style={styles.errorMessage}>{errorTelefone}</Text>

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

      {isLoading &&
        <Text>Carregando...</Text>
      }
      { !isLoading &&
      <Button
        title="Criar"
        buttonStyle={styles.button}
        onPress={() => criar()}
      />
      }


      </ScrollView>
    </KeyboardAvoidingView>
  );
}
