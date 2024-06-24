import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CreateNewPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);

  const handleCreatePassword = () => {
    // Handle password creation logic here
    console.log('Password:', password);
    console.log('New Password:', newPassword);
    console.log('Remember Me:', rememberMe);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create New Password</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.textFrame}>
          <Text style={styles.instructionText}>
            Save the password in a safe place. If you forget it, you will have to do a password reset again.
          </Text>
        </View>
        <Text style={styles.labelText}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowPassword} 
          />
        </View>
        <Text style={styles.labelText}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <MaterialCommunityIcons 
            name={showNewPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowNewPassword} 
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#6200EE' : undefined}
          />
          <Text style={styles.checkboxLabel}>Remember Me</Text>
        </View>
        <View style={styles.buttonFrame}>
          <TouchableOpacity style={styles.button} onPress={handleCreatePassword}>
            <Text style={styles.buttonText}>Create Password</Text>
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
    backgroundColor: '#9747FF',
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
    
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  textFrame: {
    borderWidth: 1,
    borderColor: '#000',
    height: 150,
    marginVertical: 16,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
  },
  instructionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  labelText: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    padding: 12,
  },
  icon: {
    padding: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  buttonFrame: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#9747FF',
    padding: 16,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateNewPassword;
