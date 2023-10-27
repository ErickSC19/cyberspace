import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from 'react-native';
import { View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { LessonButton } from '../../components/LessonButton';

export default function TabLessonScreen() {
  const router = useRouter();
  // router.push('/signup/signin')
  return (
    <View className="flex-1 px-4 pt-8">
      <Text className='text-slate-50 text-4xl mb-8'>Lecciones</Text>
      <View className="flex ">
        <LessonButton lid='phishing' image={require("../../assets/images/phishing.svg")} label="Phising" />
        <LessonButton lid='scams' image={require("../../assets/images/online-scams.svg")} label="Estafas en linea" />
        <LessonButton lid='idProtection' image={require("../../assets/images/personal-id.svg")} label="Protección de la identidad personal" />
        <LessonButton lid='strongPass' image={require("../../assets/images/strong-passwords.svg")} label="Contraseñas seguras" />
        <LessonButton lid='fundamentals' image={require("../../assets/images/essential-aspects.svg")} label="Aspectos escenciales de la seguridad" />
        <LessonButton lid='regularUpdates' image={require("../../assets/images/regular-updates.svg")} label="Actualizaciones regulares" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
