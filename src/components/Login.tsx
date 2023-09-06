/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { searchUser } from '../save';

const Login = ({navigation}: {navigation: any}) => {
    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');
    const authenticate = () => {
        if (searchUser(user, pass)) {
            navigation.navigate('Home', {name: user});
        } else {
            Alert.alert('El usuario no existe, Registrese');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text2}>Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={user}
                onChangeText={text => setUser(text)}
            />
            <Text style={styles.text2}>Contraseña</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Contraseña"
                value={pass}
                onChangeText={text => setPass(text)}
            />
            <TouchableOpacity onPress={() => authenticate()} style={styles.button}>
                <Text style={styles.text}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.regt}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#083A',
    },
    input: {
        backgroundColor: '#FFF',
        color: '#000',
        width: 400,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 35,
        fontSize: 18,
        borderColor: '#999',
        borderWidth: 1,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        top: 10,
    },
    text: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    register: {
        marginTop: 20,
    },
    regt: {
        fontSize: 20,
        color: '#FFF',
    },
});

export default Login;
