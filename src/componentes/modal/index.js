import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";


export function ModalPass({ password,handleClose}) {
    return (
        <View style={styles.container}>

            <View style={styles.menor}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.mostrarPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>
            
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button,styles.btnSalvar]}>
                    <Text style={styles.btnSalvarText}>Salvar senha</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menor: {
        backgroundColor: '#fff',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    mostrarPassword:{
     backgroundColor:'#0e0e0e',
     width:'90%',
     padding:14,
     borderRadius:8
    },
    text:{
    color:'#fff',
    textAlign:'center'
    },
    buttonArea:{
      flexDirection:'row',
      width:'90%',
      marginTop:8,
      alignItems:'center',
      justifyContent:'space-between'
    },
    button:{
    flex:1,
    alignItems:'center',
    marginTop:14,
    marginBottom:14,
    padding:8
    },
    btnSalvar:{
        backgroundColor:'#392de9',
        borderRadius:8
    },
    btnSalvarText:{
        color:'#fff',
        fontWeight:'bold'
    }
})










