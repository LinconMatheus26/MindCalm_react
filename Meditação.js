import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const MeditacaoScreen = ({ navigation }) => {
  // Exemplo de vídeos
  const videos = [
    {
      title: 'Técnica de Respiração',
      url: 'https://www.youtube.com/embed/90tpylJ_K-U',
    },
    {
      title: 'Meditação Guiada para Iniciantes',
      url: 'https://www.youtube.com/embed/IkFMtzGU0IY',
    },
    {
      title: 'Meditação para Alívio do Estresse',
      url: 'https://www.youtube.com/embed/BmslE39aAZg',
    },
    {
      title: 'Meditação para Dormir Melhor',
      url: 'https://www.youtube.com/embed/GHiCCub27CA',
    },
  ];

  // Função para fazer chamada telefônica
  const makeCall = () => {
    Linking.openURL('tel:188');
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroArea}>
        <TouchableOpacity>
          <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.subHeroArea}>
        <Text style={styles.subHeroText}>Aulas em Vídeo</Text>
      </View>

      <ScrollView style={styles.videoContainer}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Meditação para Relaxamento</Text>
          <Text style={styles.sectionDescription}>
            Aqui você pode encontrar meditações guiadas para ajudar a relaxar a mente e o corpo.
          </Text>

          {videos.map((video, index) => (
            <View key={index}>
              <Text style={styles.videoTitle}>Vídeo {index + 1}: {video.title}</Text>
              <View style={styles.videoWrapper}>
                <WebView
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: video.url }}
                  style={styles.video}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 MindCalm</Text>
      </View>

      <TouchableOpacity style={styles.panicButton} onPress={makeCall}>
        <Image source={require('./assets/video-play.png')} style={styles.panicButtonIcon} />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  subHeroArea: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
  subHeroText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    padding: 10,
  },
  content: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoWrapper: {
    aspectRatio: 16 / 9,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  panicButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#e74c3c',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  panicButtonIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
});

export default MeditacaoScreen;
