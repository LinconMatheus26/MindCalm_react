import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const BotaoPanico = ({ navigation }) => {
  const makeCall = () => {
    // Abre o aplicativo de telefone com o número 188
    Linking.openURL('tel:188');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroArea}>
        <TouchableOpacity>
          <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerTitle}>MindCalm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.panicButton} onPress={makeCall}>
          <View style={styles.buttonContent}>
            <Text style={styles.panicButtonNumber}>188</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.message}>
          Centro de Valorização da Vida (CVV) oferece apoio emocional e prevenção do suicídio, disponível 24 horas por dia.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>&copy; 2024 MindCalm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
  header: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  panicButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  panicButtonNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
});

export default BotaoPanico;
