import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Agendamento = () => {
  const [funcionario, setFuncionario] = useState('');
  const [psicologo, setPsicologo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  const agendarConsulta = () => {
    if (!funcionario || !psicologo || !data || !hora) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novoAgendamento = {
      id: Date.now(), // Usando timestamp como ID temporário
      funcionario,
      psicologo,
      data,
      hora,
    };

    setAgendamentos([...agendamentos, novoAgendamento]);
    setFuncionario('');
    setPsicologo('');
    setData('');
    setHora('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroArea}>
        <TouchableOpacity>
          <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.header}>
        <Text style={styles.logo}>MindCalm</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Agendamento de Consultas</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Funcionário:</Text>
          <TextInput
            style={styles.input}
            value={funcionario}
            onChangeText={setFuncionario}
            placeholder="Digite o nome do funcionário"
          />
          <Text style={styles.label}>Psicólogo:</Text>
          <TextInput
            style={styles.input}
            value={psicologo}
            onChangeText={setPsicologo}
            placeholder="Selecione o psicólogo"
          />
          <Text style={styles.label}>Data:</Text>
          <TextInput
            style={styles.input}
            value={data}
            onChangeText={setData}
            placeholder="Selecione a data"
          />
          <Text style={styles.label}>Hora:</Text>
          <TextInput
            style={styles.input}
            value={hora}
            onChangeText={setHora}
            placeholder="Selecione a hora"
          />
          <Button title="Agendar Consulta" onPress={agendarConsulta} />
        </View>
        
        <View style={styles.listaConsultas}>
          <Text style={styles.titleLista}>Consultas Agendadas</Text>
          <FlatList
            data={agendamentos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemConsulta}>
                <Text>Funcionário: {item.funcionario}</Text>
                <Text>Psicólogo: {item.psicologo}</Text>
                <Text>Data: {item.data}</Text>
                <Text>Hora: {item.hora}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  form: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listaConsultas: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  titleLista: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  itemConsulta: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Agendamento;
