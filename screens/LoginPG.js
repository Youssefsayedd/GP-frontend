import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';

const LoginScreen = ({ navigation }) => {
  const [isChild, setIsChild] = useState(false);
  const [isParent, setIsParent] = useState(false);
  function resetTypeHandler()
  {
    setIsChild(false);
    setIsParent(false);
  }
  function accounttypeHandler()
  {
  
    if(isChild&&!isParent)
      {

        console.log("child");
        navigation.navigate('ChildLogin');
      }
    else if(!isChild&&isParent)
        {
          console.log("Parent");
          navigation.navigate('ParentLogin');
        }
        else {
          Alert.alert("Error","Chose only one type",[{text:"Okay",style:"destructive",onPress:resetTypeHandler},{text:"Cancel",style:"cancel"}])
        }
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.content}>
         <Image source={require("../assets/images/image.png")} style={styles.image} /> 
        <Text style={styles.subtitle}>For free, join now and start learning</Text>

        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={isChild}
              onValueChange={setIsChild}
            />
            <Text style={styles.checkboxLabel}>Child</Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={isParent}
              onValueChange={setIsParent}
            />
            <Text style={styles.checkboxLabel}>Parent</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={accounttypeHandler}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupcontainer}>
          <Text >
          Not you member? 
          </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  header: {
    height: 80,
    backgroundColor: '#8B61FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#C5C5C7',
  },
  forgotPassword: {
    color: '#8B61FF',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  checkboxContainer: {
    
    width:"100%",
    flexDirection: 'coulmn',
    alignItems:"flex-start",
    justifyContent:"center",
    marginVertical: 15,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:"flex-start",
    marginHorizontal: 10,
    marginVertical:15,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: '#8B61FF',
    fontStyle:"normal",
    fontWeight:"bold",
    fontSize:15,
  
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#8B61FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupcontainer:{
    flexDirection:'row',
    flexWrap:"wrap",
    marginTop: 20,


  },
  signupText: {
    color: '#8B61FF',
    
  },
});

export default LoginScreen;
