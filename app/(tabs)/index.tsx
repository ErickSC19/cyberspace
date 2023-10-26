import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Text, View } from '../../components/Themed';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter();
  // router.push('/signup/signin')
  return (
    <View style={styles.container}>
      <Image
        style={{ height: "30%", width: "50%" }}
        source={require("../../assets/images/logo.svg")}
        contentFit="contain"
        transition={0}
      />
      <Text style={styles.title}>!Bienvenido a CyberSafe MX! Selecciona cualquiera de los apartados para comenzar tu viaje hacia una navegación web mas segura.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
