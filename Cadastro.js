import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker'; // Importar para usar a câmera

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState(null); // Estado para armazenar a imagem capturada

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(response.data);
        setError('');
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
      setAddress(null);
    }
  };

  const handleCadastro = async () => {
    // Simulação de cadastro
    if (nome && email && cep && address && photo) {
      console.log('Dados do formulário:', { nome, email, cep, address, photo });
      Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!');
      // Limpar campos após o cadastro
      setNome('');
      setEmail('');
      setCep('');
      setAddress(null);
      setPhoto(null);
    } else {
      Alert.alert('Dados incompletos', 'Por favor, preencha todos os campos e capture uma foto.');
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroArea}>
        <TouchableOpacity>
          <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="CEP"
          style={styles.input}
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />
        <Button title="Buscar CEP" onPress={fetchAddress} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {address && (
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Logradouro: {address.logradouro}</Text>
            <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
            <Text style={styles.addressText}>Cidade: {address.localidade}</Text>
            <Text style={styles.addressText}>Estado: {address.uf}</Text>
          </View>
        )}

        {/* Botão para capturar foto */}
        <Button title="Capturar Foto" onPress={takePhoto} />

        {/* Exibição da foto capturada */}
        {photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.photo} />
          </View>
        )}

        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heroArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addressContainer: {
    marginTop: 20,
  },
  addressText: {
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default Cadastro;
