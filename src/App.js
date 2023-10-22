import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext.js';
import Routes from "./routes/index.js";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  MainContainer: {
    gap: '35px',
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '0.5rem'
  }
});


