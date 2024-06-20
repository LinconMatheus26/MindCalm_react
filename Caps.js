import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');


const App = () => {
const [selectedCity, setSelectedCity] = useState('');
const [markers, setMarkers] = useState([]);

const points = [
// Recife
{ name: "CAPS Boa Vista", latlng: { latitude: -8.054888332252979, longitude: -34.88568600358578 }, city: "Recife" },
{ name: "CAPS Espaço Travessia René Ribeiro", latlng: { latitude: -8.08218690869232, longitude: -34.907858768099075 }, city: "Recife" },
{ name: "CAPS Ad Prof. José Lucena", latlng: { latitude: -8.119758532174405, longitude: -34.91558366156494 }, city: "Recife" },
{ name: "CAPS José Carlos Souto", latlng: { latitude: -8.050391524116846, longitude: -34.89389430534424 }, city: "Recife" },
{ name: "CAPS Estação Vicente Araújo", latlng: { latitude: -8.041934048688027, longitude: -34.90067992499346 }, city: "Recife" },
{ name: "CAPS 24h Espaço Azul", latlng: { latitude: -8.027835121317936, longitude: -34.89589835819317 }, city: "Recife" },
{ name: "CAPS Esperança", latlng: { latitude: -8.027226694156014, longitude: -34.89579961212908 }, city: "Recife" },
{ name: "CAPS Centro e Cordeiro de Recuperação Humana", latlng: { latitude: -8.04170279785615, longitude: -34.92342535194596 }, city: "Recife" },
{ name: "CAPS Galdino Loreto", latlng: { latitude: -8.081176321866765, longitude: -34.89789258855094 }, city: "Recife" },
{ name: "CAPS 24h Espaço David Capistrano", latlng: { latitude: -8.117250256056108, longitude: -34.91204241082061 }, city: "Recife" },
{ name: "CAPS 24h Espaço Livremente", latlng: { latitude: -8.098574861276522, longitude: -34.90947405498782 }, city: "Recife" },
// Olinda
{ name: "CAPS Nise da Silveira", latlng: { latitude: -7.9922121, longitude: -34.8275921 }, city: "Olinda" },
{ name: "CAPS Dr. Antonio Carlos Escobar", latlng: { latitude: -7.9915992, longitude: -34.8411513 }, city: "Olinda" },
// Jaboatão dos Guararapes
{ name: "CAPS Solar dos Guararapes", latlng: { latitude: -8.1910954, longitude: -34.9219053 }, city: "Jaboatão dos Guararapes" },
{ name: "CAPS Ad Recanto dos Guararapes", latlng: { latitude: -8.1844045, longitude: -34.9134825 }, city: "Jaboatão dos Guararapes" },
// Cabo de Santo Agostinho
{ name: "CAPS Estação Cidadania", latlng: { latitude: -8.2848245, longitude: -35.0259312 }, city: "Cabo de Santo Agostinho" },
{ name: "Ambulatório de Saúde Mental", latlng: { latitude: -8.2882997, longitude: -35.0250859 }, city: "Cabo de Santo Agostinho" },
// Camaragibe
{ name: "CAPS Casa da Primavera", latlng: { latitude: -8.0234568, longitude: -34.9789254 }, city: "Camaragibe" },
// Paulista
{ name: "CAPS Tereza Noronha", latlng: { latitude: -7.9560597, longitude: -34.8768258 }, city: "Paulista" },
{ name: "CAPS AD Eliane Maria José Aguiar", latlng: { latitude: -7.9402418, longitude: -34.8388941 }, city: "Paulista" },
// Abreu e Lima
{ name: "CAPS III 24h", latlng: { latitude: -7.9095603, longitude: -34.8991405 }, city: "Abreu e Lima" },
{ name: "CAPS AD (Álcool e Drogas)", latlng: { latitude: -7.9084201, longitude: -34.8982106 }, city: "Abreu e Lima" },
// São Lourenço Da Mata
{ name: "CAPS São Lourenço Mártir", latlng: { latitude: -8.0042056, longitude: -34.9789415 }, city: "São Lourenço Da Mata" },
// Igarassu
{ name: "CAPS Saber Viver", latlng: { latitude: -7.8350608, longitude: -34.9106841 }, city: "Igarassu" },
// Ilha de Itamaracá
{ name: "CAPS ilha de Itamaracá", latlng: { latitude: -7.7485533, longitude: -34.8310207 }, city: "Ilha de Itamaracá" },
// Ipojuca
{ name: "CAPS Gregório Bernardo", latlng: { latitude: -8.3987126, longitude: -35.0636848 }, city: "Ipojuca" },
// Moreno
{ name: "CAPS Gregório Bernardo", latlng: { latitude: -8.1188074, longitude: -35.0864917 }, city: "Moreno" },
// Itapissuma
{ name: "CAPS João Manoel Rodrigues Diouro", latlng: { latitude: -7.7769385, longitude: -34.8972589 }, city: "Itapissuma" },
];

useEffect(() => {
if (selectedCity) {
const cityMarkers = points.filter(point => point.city === selectedCity);
setMarkers(cityMarkers);
} else {
setMarkers([]);
}
}, [selectedCity]);

return (
  
<View style={styles.container}>
<Text style={styles.title}>Localização dos Caps</Text>
<Text style={styles.title.h4}>Veja no mapa abaixo a localização dos Caps próximos a você:</Text>
<Picker
selectedValue={selectedCity}
onValueChange={(itemValue) => setSelectedCity(itemValue)}
style={styles.picker}
>
<Picker.Item label="Selecione uma cidade" value="" />
<Picker.Item label="Recife" value="Recife" />
<Picker.Item label="Olinda" value="Olinda" />
<Picker.Item label="Jaboatão dos Guararapes" value="Jaboatão dos Guararapes" />
<Picker.Item label="Cabo de Santo Agostinho" value="Cabo de Santo Agostinho" />
<Picker.Item label="Camaragibe" value="Camaragibe" />
<Picker.Item label="Paulista" value="Paulista" />
<Picker.Item label="Abreu e Lima" value="Abreu e Lima" />
<Picker.Item label="São Lourenço Da Mata" value="São Lourenço Da Mata" />
<Picker.Item label="Igarassu" value="Igarassu" />
<Picker.Item label="Ilha de Itamaracá" value="Ilha de Itamaracá" />
<Picker.Item label="Ipojuca" value="Ipojuca" />
<Picker.Item label="Moreno" value="Moreno" />
<Picker.Item label="Itapissuma" value="Itapissuma" />
</Picker>
<MapView
style={styles.map}
initialRegion={{
latitude: -8.0475621,
longitude: -34.877,
latitudeDelta: 0.5,
longitudeDelta: 0.5,
}}
>
{markers.map((marker, index) => (
<Marker
         key={index}
         coordinate={marker.latlng}
         title={marker.name}
       />
))}
</MapView>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginVertical: 10,
},
picker: {
width: width * 0.8,
height: 50,
marginVertical: 20,
},
map: {
width: width,
height: height * 0.6,
},
});

export default App;