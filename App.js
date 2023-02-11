import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { app, ref, getDatabase, set } from './config/firebase';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [user, setUser] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [password, setPassword] = useState();
  const [confirPassword, setConfirmPassword] = useState();


  function writeUserData(userId, user, email, firstName,lastName, password) {
    const dbCurso = getDatabase();
    set(ref(dbCurso, 'users/' + userId), {
      username: user,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
  }

  const prueba = () => {
    //console.log(email, nombre);
    //if(email ===confirmemail){
    let myuuid = uuidv4();
    console.log(myuuid);
    writeUserData(myuuid, user, email, firstName,lastName,password);
    // }

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <View >
        <Text>User:</Text>
        <TextInput style={{borderStyle:'1'}} placeholder='' onChangeText={setUser} />
      </View>
      <View>
        <Text>First Name:</Text>
        <TextInput placeholder='' onChangeText={setFirstName} />
      </View>
      <View>
        <Text>Last Name:</Text>
        <TextInput placeholder='' onChangeText={setLastName} />
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput placeholder='' onChangeText={setEmail} />
      </View>
      <View>
        <Text>Confirma Email:</Text>
        <TextInput placeholder='' onChangeText={setConfirmEmail} />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput placeholder='' onChangeText={setPassword} />
      </View>
      <View>
        <Text>Confirm Password:</Text>
        <TextInput placeholder='' onChangeText={setConfirmPassword} />
      </View>
      </View>
      <View style={styles.ButtonContainer}>
        <Button onPress={prueba} title="Send" />
        <Button onPress={prueba} title="Limpiar" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer:{
    flex: 1,
    flexDirection: 'row',
    padding: '10px',
  },
  form:{
    flex:6,
    justifyContent: 'center',
    alignItems: 'stretch',

  }
});
