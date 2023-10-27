import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import VideoFrame from '../../../components/VideoFrame';
import regularUpdates from '../../../assets/data/continuous-updates.json'
import phishing from '../../../assets/data/phising.json'
import fundamentals from '../../../assets/data/fundamentals.json'
import idProtection from '../../../assets/data/protect-id.json'
import strongPass from '../../../assets/data/protect-pass.json'
import onlineScams from '../../../assets/data/online-scams.json'

const data = {
  "regularUpdates": regularUpdates,
  "fundamentals": fundamentals,
  "phishing": phishing,
  "scams": onlineScams,
  "idProtection": idProtection,
  "strongPass": strongPass,
}

export default function TabProfileScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const [currPath, setCurrPath] = useState(paths[2]);
  console.log(pathname);
  useEffect(() => {
    if (paths[2] && paths[2] !== currPath) {
      setCurrPath(paths[2])
    }
  }, [pathname]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data[currPath].titulo || ''}</Text>
      <View className='flex-1'>
        <VideoFrame />
        <Text>
          {data[currPath].texto || ''}
        </Text>
      </View>
      <TouchableOpacity className='flex-row gap-2 items-center ml-auto' activeOpacity={0.6} onPress={() => router.push(`${pathname}/01`)}>
        <Text>
          Hacer Prueba 
        </Text>
        <Ionicons
          name="chevron-forward-circle"
          size={32}
          color='#1F3F69'
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '80%',
  },
});
