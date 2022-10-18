import { StatusBar } from 'react-native';
import React from 'react';
import { Dashboard } from '@screens/dashboard/dashboard';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components';
import theme from '@theme/theme';
import AppLoading from 'expo-app-loading';
import { Navbar } from '@components/Navbar';
import { SignIn } from '@screens/signin';



export default function App() {

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn  />
      <Navbar />
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent />
    </ThemeProvider>
  );
}
