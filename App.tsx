import theme from './src/styles/theme';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor='#F0F0F5'
          barStyle="light-content"
          translucent={false}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider >
  );
}


