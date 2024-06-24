import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './screens/LoginPage';
import LoginScreen from './screens/LoginPG'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPInputScreen from './screens/OTPInputScreen';
import ForgetPasswordScreen from './screens/ForgetPassword';
import CreatenewPassword from './screens/CreatenewPassword';
import Dashboard from './screens/Dashboard';
const Stack =createNativeStackNavigator();
 

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Welcome" component={LoginPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="OTPGenerator" component={OTPInputScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreatenewPassword} />
       
      </Stack.Navigator>


    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
