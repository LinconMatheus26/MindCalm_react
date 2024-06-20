import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';

const Home = ({ navigation }) => {
  const drawerRef = React.useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawerContainer}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Cadastro');
              drawerRef.current.closeDrawer();
            }}
          >
            <Image source={require('./assets/cadastrousuario.png')} style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Agendamento');
              drawerRef.current.closeDrawer();
            }}
          >
            <Image source={require('./assets/psicologo.png')} style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Agendamento</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Diario');
              drawerRef.current.closeDrawer();
            }}
          >
            <Image source={require('./assets/emoticon-de-bom-humor.png')} style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Diario</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Meditação');
              drawerRef.current.closeDrawer();
            }}
          >
            <Image source={require('./assets/video-play.png')} style={styles.drawerIcon} />
            <Text style={[styles.drawerText, styles.drawerTextLarge]}>Meditação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              navigation.navigate('Caps');
              drawerRef.current.closeDrawer();
            }}
          >
            <Image source={require('./assets/mapa.png')} style={styles.drawerIcon} />
            <Text style={styles.drawerText}>Caps</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.heroArea}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={require('./assets/menu-aberto.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={require('./assets/icon_ioga.png')} style={styles.icon} />
            <Text style={styles.title}>MindCalm</Text>
          </View>
        </View>

        {/* Conteúdo da tela */}
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
              <Image source={require('./assets/cadastrousuario.png')} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamento')}>
              <Image source={require('./assets/psicologo.png')} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Agendamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Diario')}>
              <Image source={require('./assets/emoticon-de-bom-humor.png')} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Diario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meditação')}>
              <Image source={require('./assets/video-play.png')} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Meditação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Caps')}>
              <Image source={require('./assets/mapa.png')} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Caps</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panicButtonContainer}>
            <TouchableOpacity style={styles.panicButton} onPress={() => navigation.navigate('BotaoPanico')}>
              <Image source={require('./assets/telefone-vermelho.png')} style={styles.panicButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    width: '40%',
    padding: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
  panicButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  panicButton: {
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
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  drawerText: {
    fontSize: 18,
    color: '#34495e',
  },
  drawerTextLarge: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
