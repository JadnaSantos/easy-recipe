import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import theme from './src/theme';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor='#F0F0F5'
          barStyle="light-content"
          translucent={false}
        />

        {fontsLoaded ? <Routes /> : <Loading />}
      </NavigationContainer>
    </ThemeProvider >
  );
}


