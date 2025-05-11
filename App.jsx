import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackN from './src/Navigation/StackN'; // Certifique-se de que o caminho está correto
import { useFonts, LeagueSpartan_500Medium, LeagueSpartan_400Regular, LeagueSpartan_700Bold } from '@expo-google-fonts/league-spartan';
import AppLoading from 'expo-app-loading';

export default function App() {
  // Carregando as fontes (se você descomentar essa parte, não se esqueça de tratar quando as fontes não carregarem)
  const [fontsLoaded] = useFonts({
    LeagueSpartan_500Medium,
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StackN /> {/* Exibe a navegação */}
    </NavigationContainer>
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
