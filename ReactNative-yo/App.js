import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Logo from './assets/Logo/logo.png';
import FondoHeader from './assets/Encabezado/banner3.jpg';
import Nana from './assets/Personajes/nana.jpg';
import Yasu from './assets/Personajes/yasu.jpg';
import Shin from './assets/Personajes/shin.jpg';
import Nobu from './assets/Personajes/nobu.jpg';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View>
        <View style={styles.encabezado}>
            <Image 
                source={Logo}
                style={styles.logo}
            />
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Text style={styles.menuTexto}>Nosotros</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuTexto}>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuTexto}>Productos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuTexto}>Contacto</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

      <ImageBackground 
        source={FondoHeader}
        style={styles.imgFondo}
        resizeMode='cover'>
        <View style={styles.titulosEncabezado}>
          <Text style={styles.tituloEnca}>BlackStones</Text>
        </View>
      </ImageBackground>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Nana</Text>
        <View style={styles.contImg}>
          <Image 
            source={Nana}
            style={styles.ImgProducto}
          ></Image>
        </View>
      <TouchableOpacity
        style={styles.Boton}
        onPress={()=>(alert('Nana Ōsaki'))}
      >
        <Text style={styles.subtitulo}>Ver Nombre</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Yasu</Text>
        <View style={styles.contImg}>
          <Image 
            source={Yasu}
            style={styles.ImgProducto}
          ></Image>
          </View>
      <TouchableOpacity
        style={styles.Boton}
        onPress={()=>(alert('Yasushi Takagi'))}
      >
        <Text style={styles.subtitulo}>Ver Nombre</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Shin</Text>
      <View style={styles.contImg}>
          <Image 
            source={Shin}
            style={styles.ImgProducto}
          ></Image>
        </View>
      <TouchableOpacity
        style={styles.Boton}
        onPress={()=>(alert('Shinichi Okazaki'))}
      >
        <Text style={styles.subtitulo}>Ver Nombre</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>

      <View style={styles.tarjetas}>
        <Text style={styles.Titulo}>Nobu</Text>
        <View style={styles.contImg}>
          <Image 
            source={Nobu}
            style={styles.ImgProducto}
          ></Image>
        </View>
      <TouchableOpacity
        style={styles.Boton}
        onPress={()=>(alert('Nobuo Terashima'))}
      >
        <Text style={styles.subtitulo}>Ver Nombre</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
      
    <View style={styles.piePagina}>
      <Text style={styles.texto}>7°2 - Gomez Nayla</Text>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
    fontFamily: 'roman',
  },
  imgFondo:{
    width:'100%',
    height:200,
  },
  titulosEncabezado:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    opacity:0.5,
  },
  tituloEnca:{
    color:'#ffffff',
    fontSize:35,
    fontWeight:'bold',
    textShadowColor:'#760c0c',
    textShadowOffset:{
      width:2,
      height:2
    },
    textShadowRadius:6,
  },
  tarjetas:{
    width:'90%',
    backgroundColor:'#ffffff',
    borderRadius:20,
    padding:20,
    alignItems:'center',
    shadowColor:'#4d0909',
    shadowOffset:{
      width:0,
      height:4,
    },
    shadowOpacity:0.20,
    shadowRadius:8,
    elevation:8,
    margin:25,
  },
  Titulo:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:15,
    color: '#3a0505',
  },
  contImg:{
    width:'100%',
    height:250,
    backgroundColor:'#fff',
    borderRadius:20,
    overflow:'hidden',
    marginBottom:15,
  },
  ImgProducto:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  Boton:{
    backgroundColor:'#530404',
    borderRadius:10,
    padding:15,
    width:100,
    marginTop:10,
    marginBottom:5,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000000',
    shadowOffset:{
      width:4,
      height:6,
    },
    shadowOpacity:0.80,
    shadowRadius:6,
    elevation:6,
  },
  subtitulo:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },

  encabezado: {
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  logo: {
    height: 70, 
    width: 70, 
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTexto: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4f0909',
    marginRight: 20,
  },

  piePagina: {
    backgroundColor: '#fff',
    borderTopWidth: 3,
    borderTopColor: '#000',
    padding: 20,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#4f0909',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'roman',
  },
});
