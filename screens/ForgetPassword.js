import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import OTPInputScreen from './OTPInputScreen';

function ForgetPasswordScreen ({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendMail = () => {
    // Logic for sending OTP to email goes here
    console.log('Sending OTP to:', email);
    // For now, just navigate back to the previous screen
    navigation.navigate("OTPGenerator");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forget Password</Text>
      </View>
      <View style={styles.content}>
        <View>
          <View style={styles.textFrame}>
            <Text style={styles.instructionText}>
              Enter your email address to get an OTP code to reset your password
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.emailstyle} >

            <Text style={styles.labelText}>Email</Text>
            <Icon name="mail" size={20} color="#FFD700" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View>

        <TouchableOpacity style={styles.button} onPress={handleSendMail}>
          <Text style={styles.buttonText}>send mail</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    height: 60,
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
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emailstyle:{
    flexDirection:"row",
    justifyContent:"flex-start",
    width:200,
  },
  textFrame: {
    borderWidth: 1,
    height:100,
    borderColor: '#000',
    marginVertical: 16,
    justifyContent:"center",
    padding: 10,
    borderRadius: 8,
  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 16,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 8,
    marginHorizontal:5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonFrame:{
    width:"80%",
  },
  button: {
    backgroundColor: '#9747FF',
    padding: 16,
    borderRadius: 8,
    
    bottom:100,
    justifyContent:"center",
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgetPasswordScreen;
