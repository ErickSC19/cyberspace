import { useMemo } from 'react';
import { RadioButtonProps } from 'react-native-radio-buttons-group';
import getRandomItemsFromArray from './getRandomFromArray';

export default function generateOptions(question: {
  pregunta: string;
  opciones: {
    a: string;
    b: string;
    c: string;
    d?: string;
  };
  respuesta_correcta: string;
}) {
  if (question.opciones.d) {
    const radioButtons: RadioButtonProps[] = [
      {
        id: 'a', // acts as primary key, should be unique and non-empty string
        label: `${question.opciones.a}`,
        value: 'a',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 }
      },
      {
        id: 'b',
        label: `${question.opciones.b}`,
        value: 'b',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 },
        containerStyle: { marginTop: 20 }
      },
      {
        id: 'c',
        label: `${question.opciones.c}`,
        value: 'c',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 },
        containerStyle: { marginTop: 20 }
      },
      {
        id: 'd',
        label: `${question.opciones.d}`,
        value: 'd',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 },
        containerStyle: { marginTop: 20 }
      }
    ];
    console.log(getRandomItemsFromArray(radioButtons, 4).length);

    return radioButtons;
  } else {
    const radioButtons: RadioButtonProps[] = [
      {
        id: 'a', // acts as primary key, should be unique and non-empty string
        label: `${question.opciones.a}`,
        value: 'a',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 }
      },
      {
        id: 'b',
        label: `${question.opciones.b}`,
        value: 'b',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 },
        containerStyle: { marginTop: 20 }
      },
      {
        id: 'c',
        label: `${question.opciones.c}`,
        value: 'c',
        color: '#1F3F69',
        labelStyle: { color: '#fff', fontSize: 16 },
        containerStyle: { marginTop: 20 }
      }
    ];
    console.log(getRandomItemsFromArray(radioButtons, 3).length);
    
    return radioButtons;
  }
}
