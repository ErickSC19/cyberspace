import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from 'react-native';
import { View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { HelpButton } from '../../components/HelpButton';
import { useCourse } from '../../context/CourseContext';

export default function TabLessonScreen() {
  // router.push('/signup/signin')
  return (
    <View className="flex-1 pt-8">
      <Text className="text-slate-50 text-4xl mb-8">Ayuda</Text>
      <View className="flex px-2">
        <HelpButton
          lid="idSteal"
          image={require('../../assets/images/phishing.svg')}
          label="Robo de Identidad"
        />
        <HelpButton
          lid="scams"
          image={require('../../assets/images/online-scams.svg')}
          label="Estafas en linea"
        />
        <HelpButton
          lid="idProtection"
          image={require('../../assets/images/personal-id.svg')}
          label="Protección de la identidad personal"
        />
        <HelpButton
          lid="firewall"
          image={require('../../assets/images/strong-passwords.svg')}
          label="¿Qué es un Firewall?"
        />
        <HelpButton
          lid="fundamentals"
          image={require('../../assets/images/essential-aspects.svg')}
          label="Aspectos escenciales de la seguridad"
        />
        <HelpButton
          lid="regularUpdates"
          image={require('../../assets/images/regular-updates.svg')}
          label="Actualizaciones regulares"
        />
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
