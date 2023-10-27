import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Text } from '../../../../components/Themed';
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group';
import { Ionicons } from '@expo/vector-icons';
import generateOptions from '../../../../helpers/generateOptions';
import { useCourse } from '../../../../context/CourseContext';

export default function TabProfileScreen() {
  const { questions, currentStreak, toggleAnswer, changeGrade, currentLesson } = useCourse();
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const [currPath, setCurrPath] = useState(paths[3]);
  // console.log(pathname);

  useEffect(() => {
    if (paths[3] && paths[3] !== currPath) {
      setCurrPath(paths[3]);
    }
  }, [pathname]);

  const [selectedId, setSelectedId] = useState<string | undefined>();

  const radioButtons: RadioButtonProps[] | void = useMemo(() => {
    if (Number(currPath) < 10) {
      if (questions[Number(currPath)].opciones.d) {
        return [
          {
            id: 'a', // acts as primary key, should be unique and non-empty string
            label: `${questions[Number(currPath)].opciones.a}`,
            value: 'a',
            color: '#1F3F69',
            labelStyle: { color: '#fff', fontSize: 16 }
          },
          {
            id: 'b',
            label: `${questions[Number(currPath)].opciones.b}`,
            value: 'b',
            color: '#1F3F69',
            labelStyle: { color: '#fff', fontSize: 16 },
            containerStyle: { marginTop: 20 }
          },
          {
            id: 'c',
            label: `${questions[Number(currPath)].opciones.c}`,
            value: 'c',
            color: '#1F3F69',
            labelStyle: { color: '#fff', fontSize: 16 },
            containerStyle: { marginTop: 20 }
          },
          {
            id: 'd',
            label: `${questions[Number(currPath)].opciones.d}`,
            value: 'd',
            color: '#1F3F69',
            labelStyle: { color: '#fff', fontSize: 16 },
            containerStyle: { marginTop: 20 }
          }
        ];
      }
      return [
        {
          id: 'a', // acts as primary key, should be unique and non-empty string
          label: `${questions[Number(currPath)].opciones.a}`,
          value: 'a',
          color: '#1F3F69',
          labelStyle: { color: '#fff', fontSize: 16 }
        },
        {
          id: 'b',
          label: `${questions[Number(currPath)].opciones.b}`,
          value: 'b',
          color: '#1F3F69',
          labelStyle: { color: '#fff', fontSize: 16 },
          containerStyle: { marginTop: 20 }
        },
        {
          id: 'c',
          label: `${questions[Number(currPath)].opciones.c}`,
          value: 'c',
          color: '#1F3F69',
          labelStyle: { color: '#fff', fontSize: 16 },
          containerStyle: { marginTop: 20 }
        }
      ];
    }
  }, []);

  useEffect(() => {
    if (selectedId && selectedId === questions[Number(currPath)].respuesta_correcta) {
      toggleAnswer(Number(currPath), true);
    } else {
      toggleAnswer(Number(currPath), false);
    }
  }, [selectedId]);

  if (Number(currPath) < 10 && radioButtons) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Prueba de {currentLesson}</Text>
        <Text className="mr-auto my-2">Pregunta {Number(currPath) + 1}</Text>
        <Text className="text-xl mr-auto">
          {questions[Number(currPath)].pregunta || 'Pregunta'}
        </Text>
        {radioButtons && (
          <View className="flex-1 w-full justify-center overflow-y-auto">
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        )}
        <View
          className={`flex-row w-full mt-auto ${
            Number(currPath) > 0 ? 'justify-between' : 'justify-end'
          }`}
        >
          {Number(currPath) > 0 && (
            <TouchableOpacity
              className="flex-row gap-2 items-center"
              activeOpacity={0.6}
              onPress={() =>
                router.push(`/course/${paths[2]}/${Number(currPath) - 1}`)
              }
            >
              <Ionicons name="chevron-back-circle" size={48} color="#1F3F69" />
              <Text className="text-xs">Pregunta Anterior</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            className="flex-row gap-2 items-center"
            activeOpacity={0.6}
            onPress={() =>
              router.push(`/course/${paths[2]}/${Number(currPath) + 1}`)
            }
          >
            <Text className="text-xs">Siguiente Pregunta</Text>
            <Ionicons name="chevron-forward-circle" size={48} color="#1F3F69" />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    changeGrade(paths[2], currentStreak);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Prueba de {currentLesson}</Text>
        <Text className="text-xl mr-auto my-5">Resultados:</Text>
        <Text className="text-xl mr-auto ">{currentStreak < 8 ? 'Lo sentimos, pero tu calificación no es aprobatoria:' : '¡Felicidades! Obtuviste una calificación aprobatoria de:'}</Text>
        <Text className={`text-4xl my-8 ${currentStreak < 8 ? 'text-red-500' : 'text-green-500'}`}>{currentStreak}/10</Text>
        <Text className="text-xl mr-auto ">{currentStreak < 8 ? 'No te preocupes, puedes intentar de nuevo la prueba o tomarte un descanso.' : 'Puedes pasar al siguiente curso o tomar un descanso.'}</Text>
        <View className="flex-row w-full mt-auto justify-between">
          <TouchableOpacity
            className="flex-row gap-2 items-center"
            activeOpacity={0.6}
            onPress={() => router.push(`/course`)}
          >
            <Ionicons name="chevron-back-circle" size={48} color="#1F3F69" />
            <Text className="text-xs">Regresar al video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row gap-2 items-center"
            activeOpacity={0.6}
            onPress={() => router.push(`/course`)}
          >
            <Text className="text-xs">Regresar a Lecciones</Text>
            <Ionicons name="chevron-forward-circle" size={48} color="#1F3F69" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000615'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginRight: 'auto'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
