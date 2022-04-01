import React,{ useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
  
    return (
      <View style={styles.container}>
      <Image source={require('./img/origen.png')}/>
      <Text>Usuario:</Text>
      <TextInput style={styles.input}
      placeholder='Usuario'
      onChangeText={(val)=>setUsuario(val)}
      />

      <Text>Contraseña:</Text>
      <TextInput style={styles.input}
      placeholder='Contraseña'
      onChangeText={(val)=>setContraseña(val)}
      />
    <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

      


    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
