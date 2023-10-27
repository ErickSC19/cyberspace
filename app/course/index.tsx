import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text } from 'react-native';
import { View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { LessonButton } from '../../components/LessonButton';
import { useCourse } from '../../context/CourseContext';

export default function TabLessonScreen() {
  const { courseGrades } = useCourse();
  const router = useRouter();
  // router.push('/signup/signin')
  return (
    <View className="flex-1 pt-8">
      <Text className="text-slate-50 text-4xl mb-8">Lecciones</Text>
      <View className="flex px-2">
        <LessonButton
          lid="idSteal"
          image={require('../../assets/images/phishing.svg')}
          label="Robo de Identidad"
          isComplete={courseGrades['idSteal'] > 7 ? true : false}
        />
        <LessonButton
          lid="scams"
          image={require('../../assets/images/online-scams.svg')}
          label="Estafas en linea"
          isComplete={courseGrades['scams'] > 7 ? true : false}
        />
        <LessonButton
          lid="idProtection"
          image={require('../../assets/images/personal-id.svg')}
          label="Protección de la identidad personal"
          isComplete={courseGrades['idProtection'] > 7 ? true : false}
        />
        <LessonButton
          lid="firewall"
          image={require('../../assets/images/strong-passwords.svg')}
          label="¿Qué es un Firewall?"
          isComplete={courseGrades['firewall'] > 7 ? true : false}
        />
        <LessonButton
          lid="fundamentals"
          image={require('../../assets/images/essential-aspects.svg')}
          label="Aspectos escenciales de la seguridad"
          isComplete={courseGrades['fundamentals'] > 7 ? true : false}
        />
        <LessonButton
          lid="regularUpdates"
          image={require('../../assets/images/regular-updates.svg')}
          label="Actualizaciones regulares"
          isComplete={courseGrades['regularUpdates'] > 7 ? true : false}
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
