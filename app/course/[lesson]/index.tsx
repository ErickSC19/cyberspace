import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import getRandomItemsFromArray from '../../../helpers/getRandomFromArray';
import { useCourse } from '../../../context/CourseContext';
import VideoFrame from '../../../components/VideoFrame';
import regularUpdates from '../../../assets/data/continuous-updates.json';
import idSteal from '../../../assets/data/id-steal.json';
import fundamentals from '../../../assets/data/fundamentals.json';
import idProtection from '../../../assets/data/protect-id.json';
import firewall from '../../../assets/data/firewall.json';
import onlineScams from '../../../assets/data/online-scams.json';

interface StringByString {
  [key: string]: {
    titulo: string;
    texto: string;
    video: string;
    preguntas: {
      pregunta: string;
      opciones: {
        a: string;
        b: string;
        c: string;
        d?: string;
      };
      respuesta_correcta: string;
    }[];
  };
}

const data: StringByString = {
  "regularUpdates": regularUpdates,
  "fundamentals": fundamentals,
  "idSteal": idSteal,
  "scams": onlineScams,
  "idProtection": idProtection,
  "firewall": firewall
};

export default function LessonScreen() {
  const { setQuestions, setCurrentStreak, setCurrentLesson } = useCourse();
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const [currPath, setCurrPath] = useState(paths[2]);
  //console.log(pathname);
  useEffect(() => {
    const selected = getRandomItemsFromArray(data[currPath].preguntas, 10);
    setCurrentLesson(data[currPath].titulo)
    setQuestions(selected);
    setCurrentStreak(0);
  }, [])

  useEffect(() => {
    if ((paths[1] === 'course') && paths[2] && (paths[2] !== currPath)) {
      // console.log(pathname);
      setCurrPath(paths[2]);
      const selected = getRandomItemsFromArray(data[currPath].preguntas, 10);
      setQuestions(selected);
    }
  }, [pathname]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data[currPath].titulo || ''}</Text>
      <View className="flex-1">
        <VideoFrame videoId={`${data[currPath].video}`} />
        <Text>{data[currPath].texto || ''}</Text>
      </View>
      <TouchableOpacity
        className="flex-row gap-2 items-center ml-auto"
        activeOpacity={0.6}
        onPress={() => router.push(`/course/${currPath}/0`)}
      >
        <Text>Hacer Prueba</Text>
        <Ionicons name="chevron-forward-circle" size={32} color="#1F3F69" />
      </TouchableOpacity>
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
    fontSize: 32,
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 16
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
