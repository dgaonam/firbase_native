import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { app, ref, getDatabase, set } from './config/firebase';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirmEmail, setConfirmEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirPassword, setConfirmPassword] = useState(null);


  function writeUserData(document, userId, user, email, firstName, lastName, password) {
    const dbCurso = getDatabase();
    try{
    set(ref(dbCurso, document + '/' + userId), {
      username: user,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
    alert("Se registro de forma correcta");
    }catch(e){
      console.log(e);
    }
  }

  const prueba = () => {
    let cont = true;
    if ((user === null || user === "") && cont===true) {
      alert("user es requerido");
      cont = false;
    }
    if ((email === null || email === "" ) && cont===true) {
      alert("Email es requerido");
      cont = false;
    }
    if ((firstName === null || firstName === "") && cont===true) {
      alert("First Name es requerido");
      cont = false;
    }
    if ((lastName === null || lastName === "") && cont===true) {
      alert("Last Name es requerido");
      cont = false;
    }
    if ((password === null || password === "") && cont===true) {
      alert("Password es requerido");
      cont = false;
    }
    if (email === confirmEmail) {
      if(password === confirPassword){
      let myuuid = uuidv4();
      console.log(myuuid);
      writeUserData("users", myuuid, user, email, firstName, lastName, password);
      }else{
        alert("Las contraseñas no coiciden");
      }
    } else {
      alert("El email no coincide con la confirmacion");
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View  >
          <Text style={styles.label}>User:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setUser} />
        </View>
        <View>
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setFirstName} />
        </View>
        <View>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setLastName} />
        </View>
        <View >
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setEmail} />
        </View>
        <View>
          <Text style={styles.label}>Confirma Email:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setConfirmEmail} />
        </View>
        <View>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setPassword} />
        </View>
        <View>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput style={styles.input} placeholder='' onChangeText={setConfirmPassword} />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <Button style={styles.button} onPress={prueba} title="Send" />
        <Button style={styles.button} onPress={prueba} title="Limpiar" />
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
  ButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: '10px',
  },
  button: {
    flex: 2,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    margin: 2,
  },
  form: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: "column",

  },
  label: {
    color: '#4B0F75 ',
    paddingBottom: 2,
    fontSize: 20
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#4B0F75',
    borderRadius: 2,
    borderWidth: 1,
    width: '100%',
    borderColor: '#4B0F75',
  }
});
