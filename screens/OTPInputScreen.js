import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function OTPInputScreen ({ navigation }) {
  function OTPCheckHandler()
  {
    //sdsd
    navigation.navigate("CreateNewPassword")
  }
  return (
    <SafeAreaView style={styles.container}>

    <View >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forget Password</Text>
      </View>
      <View style={styles.content}>
        <Icon name="lock-closed" size={50} color="#9747FF" />
        <View style={styles.otpContainer}>
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
        </View>
        <Text style={styles.otpText}>Enter OTP code.</Text>
        <TouchableOpacity style={styles.button} onPress={
          OTPCheckHandler
        }>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9747FF',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#f0f0f0',
    width: 50,
    height: 50,
  },
  otpText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9747FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OTPInputScreen;
