import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Diario = () => {
  const [date, setDate] = useState(new Date());
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const moodOptions = [
    { label: 'Muito Triste', color: '#616161' },
    { label: 'Triste', color: '#9e9e9e' },
    { label: 'Neutro', color: '#bdbdbd' },
    { label: 'Feliz', color: '#ffa726' },
    { label: 'Muito Feliz', color: '#ff7043' },
  ];

  const saveEntry = () => {
    const entry = { date, mood, notes };
    setEntries([...entries, entry]);
    setDate(new Date());
    setMood('');
    setNotes('');
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroArea}>
        <TouchableOpacity>
          <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MindCalm</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>Data:</Text>
          {Platform.OS === 'ios' ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="spinner"
              onChange={handleDateChange}
            />
          ) : (
            <>
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
                <Text style={styles.dateButtonText}>Selecionar Data</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </>
          )}

          <Text style={styles.formLabel}>Humor:</Text>
          <View style={styles.moodContainer}>
            {moodOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.moodButton,
                  { backgroundColor: option.color },
                  mood === option.label && styles.selectedMoodButton,
                ]}
                onPress={() => setMood(option.label)}
              >
                <Text style={styles.moodButtonText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.formLabel}>Notas:</Text>
          <TextInput
            style={[styles.formInput, styles.notesInput]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Digite suas notas"
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button} onPress={saveEntry}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.entriesContainer}>
          <Text style={styles.entriesTitle}>Registros Anteriores</Text>
          {entries.map((entry, index) => (
            <View key={index} style={styles.entryContainer}>
              <Text>Data: {entry.date.toLocaleDateString()}</Text>
              <Text>Humor: {entry.mood}</Text>
              <Text>Notas: {entry.notes}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  header: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  formLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateButtonText: {
    color: '#333333',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  moodButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedMoodButton: {
    borderWidth: 2,
    borderColor: '#333333',
  },
  moodButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#333333',
  },
  notesInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  entriesContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  entriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  footer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    alignItems: 'center',
  },
});

export default Diario;
