import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import regularUpdates from '../../../assets/data/m3_actualizaciones.json';
import fundamentals from '../../../assets/data/m3_ciberseguridad.json';
import firewall from '../../../assets/data/m3_firewall.json';
import idSteal from '../../../assets/data/m3_robo_identidad.json';
import phishing from '../../../assets/data/m3_phishing.json';
import idProtection from '../../../assets/data/m3_proteccion_en_linea.json';
import { usePathname, useRouter } from 'expo-router';
import { useState } from 'react';
import HelpStep from '../../../components/HelpStep';
import { ScrollView } from 'react-native-gesture-handler';

interface HelpSteps {
  [key: string]: {
    title: string;
    steps: {
      stepTitle: string;
      body: string;
    }[];
  };
}

const data: HelpSteps = {
  regularUpdates: regularUpdates,
  fundamentals: fundamentals,
  idSteal: idSteal,
  scams: phishing,
  idProtection: idProtection,
  firewall: firewall
};

export default function name() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const [currPath, setCurrPath] = useState(paths[2]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data[currPath].title || ''}</Text>
      <ScrollView className="flex-1">
        {data[currPath].steps.map((step, i) => (
          <HelpStep key={'step-'+i} num={i + 1} title={step.stepTitle} body={step.body} />
        ))}
      </ScrollView>
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
