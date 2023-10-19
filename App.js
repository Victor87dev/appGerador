
import { StyleSheet, Text, View , Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react';
import {ModalPass} from './src/componentes/modal'



let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function App() {

  const [size,setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)



  function generatePassword(){
   let password = '';
   for(let i = 0, n = charset.length;i< size;i++){
    password+= charset.charAt(Math.floor(Math.random() * n))
   }
   
   setPasswordValue(password)
   setModalVisible(true);
   
  }

  return (
    <View style={styles.container}>
     <Image 
     source={require("./assets/logo.png")}
     style={styles.logo}
     />

     <Text style={styles.title}>{size} caracteres</Text>

     <View style={styles.area}>
<Slider
style={{height:50}}
minimumValue={6}
maximumValue={20}
maximumTrackTintColor='#ff0000'
minimumTrackTintColor='#000'
thumbTintColor='#392de9'
value={size}
onValueChange={(value) => setSize(value.toFixed(0))}
/>

     </View>

     <TouchableOpacity style={styles.btn} onPress={generatePassword}>
      <Text style={styles.btnText}>Gerar senha</Text>


     </TouchableOpacity>

     <Modal visible={modalVisible} animationType="fade" transparent={true}>
    <ModalPass password={passwordValue} handleClose={ () => setModalVisible(false) } />

     </Modal>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f4f4ff',
    justifyContent:'center'
  },
  logo:{
    marginBottom:60
  },
  title:{
fontSize:30,
fontWeight:'bold'
  },
  area:{
 marginTop:14,
 marginBottom:14,
 width:'80%',
 backgroundColor:'#fff',
 borderRadius:8,
 padding:8
  },
  btn:{
backgroundColor:'#392de9',
borderRadius:8,
width:'80%',
height:50,
alignItems:'center',
justifyContent:'center',
marginBottom:18
  },
  btnText:{
color:'#fff',
fontSize:20,
  }
});